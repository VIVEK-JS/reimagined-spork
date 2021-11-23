import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router";
import "./style.css";

const ShowRepo = ({ history }) => {
  const [allRepo, setAllrepo] = useState([]);
  const { pnumber } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.github.com/user/repos?per_page=${4}&page=${pnumber}`, {
        headers: {
          Authorization: "token " + localStorage.getItem("access_token"),
        },
      })
      .then(res => {
        setAllrepo(res.data);
      });
  }, [pnumber]);

  const next = () => {
    let page = parseInt(pnumber) + 1;
    history.push(`/repo/pagenumber/${page}`);
  };

  const prev = () => {
    let page = parseInt(pnumber) - 1;
    history.push(`/repo/pagenumber/${page}`);
  };

  const goHome = () => history.push("/oauth");

  return (
    <div className="repo-container">
      <h2>List of all ypur repositories</h2>
      <div className="repo-list">
        <button className="button1" onClick={goHome}>
          HOME PAGE
        </button>
        {allRepo.map((repo) => {
          return (
            <React.Fragment>
              <div className="repo-content">
                <h4>{repo.name}</h4>
                <p className="description">{repo.description}</p>
                <div className="creation">
                  <p>{repo.created_at}</p>
                </div>
                <div>
                  <p>{repo.private ? "Private" : "Public"}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="buttons">
        <button
          className="button1"
          disabled={pnumber - 1 ? false : true}
          onClick={prev}
        >
          PREV
        </button>
        <button
          className="button1"
          disabled={allRepo.length < 4 ? true : false}
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default withRouter(ShowRepo);
