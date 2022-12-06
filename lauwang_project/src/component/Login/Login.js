import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "quochung",
      password: "123"
    },
    {
      username: "vietphuong",
      password: "123"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên đăng nhập </label>
          <input type="text" name="uname" class="form-control" required />
          {renderErrorMessage("uname")}
        </div>
        <div class="form-group">
          <label>Mật khẩu </label>
          <input type="password" name="pass" class="form-control" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
        <button type="submit" class="btn btn-warning">Đăng nhập</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title" style={{color:"#fe4b09"}}>LauWang</div>
        {isSubmitted ?  window.location = '/Quanly_Trangchu' : renderForm}
      </div>
    </div>
  );
}

export default Login;