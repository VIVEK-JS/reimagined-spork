import React from "react";
import "./style.css";
const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET} =process.env;

const LoginForm = () => {
  console.log(REACT_APP_CLIENT_ID)
    const loginWithgitHub = () =>window.location.href=`https://github.com/login/oauth/authorize?client_id=${REACT_APP_CLIENT_ID} &scope=user%20repo%20admin:repo_hook`
    
  return (
    <div className="login-ui-container">
      <div className="login-box">
        <h1>CASH_BOOK</h1>
        <button type="button" onClick={loginWithgitHub} className="login-button">
          Login with github
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
