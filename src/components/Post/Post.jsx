import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const { id, title } = post;
  const postStyle = {
    border: "2px solid blue",
    padding: "1rem",
    borderRadius: "20px",
    margin: "30px",
  };

  const handleShowDetails = () => navigate(`/post/${id}`);

  return (
    <div style={postStyle}>
      <h3>Post of id: {id}</h3>
      <p>{title}</p>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
        <br />
      </Link>
      <button onClick={handleShowDetails}>click to see details</button>
    </div>
  );
};

export default Post;
