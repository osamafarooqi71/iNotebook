const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../modules/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRECT = "JDH#&*DH";
const fetchuser = require("../middleware/fetchuser");

// Router 1: Create a user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = await validationResult(req);
    // cheack if there is any error, return with 400 response code and error messages in json formate.
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    try {
      // Check if email already registered, then return with status code 400
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).send({ error: "Email already registered!" });
      }

      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
      });
      console.log(securePassword);

      const data = {
        user: {
          id: user._id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRECT);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// Router 2: Authenticate user using: POST "/api/auth/login". No login required
// Ideal for response.json({success, message});
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = await validationResult(req);
    // cheack if there is any error, return with 400 response code and error messages in json formate.
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, message: errors.array() });
    }

    try {
      const { email, password } = req.body; // extract email and password using destructuring

      // Check if email already registered, then return with status code 400
      let user = await User.findOne({ email });
      if (!user) {
        res
          .status(400)
          .json({ success, message: "Please use correct email and password" });
      }
      let passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        res
          .status(400)
          .json({ success, message: "Please use correct email and password" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(payload, JWT_SECRECT);
      return res.json({
        success: true,
        message: "Login successful",
        authToken,
      });
    } catch (error) {
      console.error(error, error.message);
      res.status(500).json({ success, message: "Internal server error" });
    }
  }
);

// Router 3: Get user data using Post "/api/auth/getuser", Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");

    // check if user data not found then return an unathorized access token response.
    if (!user) {
      res.status(401).send("Unathorized access token, Please login again.11");
    }

    res.send(user);
  } catch (error) {
    console.error(error, error.message);
    res.status(500).send("Internal server error 2");
  }
});

module.exports = router;
