import UserItem from "./Useritem.js";

function Users({ data }) {
  console.log(data);
  return (
    <>
      <div
        className="container mb-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginTop: "2%",
        }}
      >
        {data.map((ele, index) => (
          <UserItem key={index} user={ele} />
        ))}
      </div>
    </>
  );
}

export default Users;
