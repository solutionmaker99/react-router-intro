const User = ({ user }) => {
  const { id, name, email, phone, address } = user;
  const userStyle = {
    border: "2px solid blue",
    padding: "1rem",
    borderRadius: "20px",
    margin: "30px",
  };
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>City: {address.city}</p>
    </div>
  );
};

export default User;
