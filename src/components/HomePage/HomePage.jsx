import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useSelector, usedispatch, useDispatch } from "react-redux";
import { useLocation } from "react-router";

import "./style.css";
const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET} =process.env;
const HomePage = ({ history }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query.get("code");
  var accessToken;
  if (state.loadData) {
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
        {
          client_id: REACT_APP_CLIENT_ID,
          client_secret: REACT_APP_CLIENT_SECRET,
          code: code,
        },
        { headers: { Accept: "application/json" } }
      )
      .then((res) => {
        accessToken = res.data.access_token;
        localStorage.setItem("access_token", res.data.access_token);
        axios
          .get("https://api.github.com/user", {
            headers: { Authorization: "token " + accessToken },
          })
          .then((res) => {
            dispatch({ type: "SAVE_DATA", payload: res.data });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

  const toRepo = () => history.push("/repo/pagenumber/1");

  const logout = () => {
    localStorage.clear();
    history.push("/logout");
    dispatch({ type: "CLEAR_DATA" });
  };
  const toFaq = () => history.push("/faq");

  return (
    <div className="login-ui-container">
      <div className="login-box">
        <div className="header">Github Manager</div>
        <div className="header1">{state.name}</div>
        <div className="lable1">
          <img src={state.avatar_url}></img>
        </div>
        <div className="lable1">
          <label className="username"> {state.name} </label>
        </div>
        <div className="lable1">
          <label className="header1"> {state.login} </label>
        </div>
        <button  className="buttonn" onClick={toRepo}>
          Show Repositories
        </button>
        <button  className="buttonn" onClick={logout}>
          LOG OUT
        </button>
        <button  className="buttonn" onClick={toFaq}>
          FAQ
        </button>
      </div>
    </div>
  );
};

export default withRouter(HomePage);
