import React from "react";

/**
 * How to use Alert component
 * add into App.js 'const [alert, setAlert] = useState(null);'
 * Add this below Navbar or where you want to show the alert messgaes ' <Alert alert={alert} />'
 *
 */

function Alert({ alert }) {
  const capitalize = (word) => {
    let lowerWord = word.toLowerCase();
    if (lowerWord === "danger") {
      lowerWord = "error";
    }
    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
  };
  return (
    alert && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(alert.type)}</strong>: {alert.msg}
      </div>
    )
  );
}

export default Alert;
