import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const UserPage = ({ getUser, user, getRepos, repos }) => {
  const { username } = useParams();
  // console.log(username);
  // console.log(user);
  // console.log("Repo", repos);

  const {
    hireable,
    name,
    avatar_url,
    bio,
    location,
    html_url,
    following,
    followers,
    email,
    public_repos,
  } = user;

  // use it to fetch the data by passing our username and use it inside our components.
  useEffect(() => {
    getUser(username);
  }, []);
  useEffect(() => {
    getRepos(username);
  }, []);
  const repoNames = repos.map((ele, i) => {
    return (
      <>
        <div className="card grid-1" style={{ margin: "5px", padding: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ fontFamily: "italic", margin: 0 }}>
              {i + 1}. {ele.name}
            </h4>
            <button
              className="btn btn-dark"
              style={{ width: "8vw", height: "5vh", padding: "0" }}
            >
              <Link
                to={ele.html_url}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                View Repo
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <body style={{ backgroundColor: "black" }}>
        <h1 style={{ color: "white", fontFamily: "cursive" }}>
          Welcome {name} !!
        </h1>
        <Link to="/" className="btn btn-dark" style={{ marginBottom: "10px" }}>
          Back to Search
        </Link>
        <div className="container">
          <div className="card " style={{ backgroundColor: "beige" }}>
            <div
              className="card grid-2 bg-dark"
              style={{
                color: "white",
                fontFamily: "serif",
                padding: "10px",
                margin: "10px",
              }}
            >
              <div className="all-center">
                <h1>
                  Open for Hiring:{" "}
                  {hireable ? (
                    <>
                      <span style={{ color: "green" }}>{"Available"}</span>
                    </>
                  ) : (
                    <>
                      <span style={{ color: "red" }}>{"Not Available"}</span>
                    </>
                  )}{" "}
                </h1>
                <img
                  src={avatar_url}
                  className="rounded-circle"
                  style={{ width: "250px" }}
                  alt="avatar"
                />
              </div>
              <h2>{name}</h2>
              <h4>{location}</h4>
            </div>

            <div>
              {bio && (
                <>
                  <h2>Bio:</h2>
                  <h3>{bio}</h3>
                </>
              )}
              <a
                href={html_url}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
                style={{ marginBottom: "10px" }}
              >
                Visit My GIthub Profile
              </a>
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                padding: "5%",
              }}
            >
              <div
                className="badge bg-success text-sm-center"
                style={{ width: "20%", padding: "25px" }}
              >
                Followers: {followers}
              </div>
              <div
                className="badge bg-primary text-sm-center"
                style={{ width: "20%", padding: "25px" }}
              >
                Following: {following}
              </div>
              <div
                className="badge bg-dark text-sm-center"
                style={{ width: "20%", padding: "25px" }}
              >
                Public repos: {public_repos}
              </div>
            </div>
            <div className="card bg-dark">
              <h1 style={{ fontFamily: "serif", color: "white" }}>
                List of Repositories
              </h1>
              {repoNames}
            </div>
            <div style={{ fontFamily: "monospace" }}>
              <h3>Email:{email ? `${email}` : " Not Available"}</h3>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default UserPage;
