const jwt = require("jsonwebtoken");
const JWT_SECRECT = "JDH#&*DH";

// this is a middleware, this is used to authenticate the user and get the user ID
// this will be called all places where login is required before proceeding the actual task.
const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send("Unathorized access token, Please login again.12");
  }
  try {
    const data = await jwt.verify(token, JWT_SECRECT);
    req.user = data.user;
    next(); // once all the logic is completed and correct(without any error) then do the next step in calling place
    // which is run (req, res)=>{} function.
  } catch (error) {
    console.log(error);
    res.status(401).send("Unathorized access token, Please login again.12");
  }
};

module.exports = fetchuser;
