import React from "react";
import { useParams, useHistory, withRouter, Redirect } from "react-router";

const Faq = ({ history }) => {
  const goHome = () => {
    history.push("/oauth");
  };
  return (
    <div className="repo-container">


      <div className="repo-list">
      <button className="button1" onClick={goHome}>
      HOME PAGE
    </button>
      <h2>1.What is react?</h2>

        <div className="repo-content">
          <p className="description">React is UI library design by facebook</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Faq);
