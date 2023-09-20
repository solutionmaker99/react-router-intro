import { useLoaderData } from "react-router-dom";
import Album from "../Album/Album";

const Albums = () => {
  const albums = useLoaderData();
  return (
    <div>
      <h2>Albums: {albums.length}</h2>
      {albums.map((album) => (
        <Album key={album.id} album={album}></Album>
      ))}
    </div>
  );
};

export default Albums;
