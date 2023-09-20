import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
  const post = useLoaderData();
  const { id, title, body } = post;
  const detailStyle = {
    backgroundColor: "#f0ff0f",
    padding: "2rem",
    borderRadius: "20px",
  };

  const handleGoBack = () => navigate(-1);

  return (
    <div style={detailStyle}>
      <h2>Post details of: {id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
