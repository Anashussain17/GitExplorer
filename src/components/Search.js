// import { useState } from "react";

import { useState } from "react";
import { useLocation } from "react-router-dom";
function Search({ searchUsers }) {
  const [username, setUsername] = useState("");
  const location = useLocation();
  if (location.pathname !== "/") {
    return null;
  }
  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      searchUsers(username);
    }
  };
  return (
    <>
      <form
        className="form-inline"
        style={{ display: "flex" }}
        onSubmit={onSubmitHandler}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ marginRight: "10px" }}
          onChange={onChangeHandler}
        />
        <button
          className="btn btn-outline-primary my-2 my-sm-0"
          type="submit"
          onSubmit={onSubmitHandler}
        >
          Search
        </button>
      </form>
    </>
  );
}
export default Search;
