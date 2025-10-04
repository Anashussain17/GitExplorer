import { Link } from "react-router-dom";
function Useritem({ user }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <center>
          <img src={user.avatar_url} className="card-img-top" alt="avatar" />
          <h2 className="card-title">{user.login}</h2>
          <Link to={`/user/${user.login}`} className="btn btn-primary">
            Git Profile
          </Link>
        </center>
      </div>
    </>
  );
}

export default Useritem;
