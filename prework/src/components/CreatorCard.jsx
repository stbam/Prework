import { Link } from "react-router-dom";

export default function CreatorCard({ creator }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      {creator.imageURL && (
        <img src={creator.imageURL} width="150" />
      )}

      <h2>{creator.name}</h2>
      <p>{creator.description}</p>

      <a href={creator.url} target="_blank">
        Visit Channel
      </a>

      <br />

      <Link to={`/creator/${creator.id}`}>View</Link> |{" "}
      <Link to={`/edit/${creator.id}`}>Edit</Link>
    </div>
  );
}
/*
export default function CreatorCard({ creator }) {
  return (
    <div>
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank">
        Visit
      </a>
    </div>
  );
}*/