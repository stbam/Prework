import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams, Link } from "react-router-dom";

export default function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  async function getCreator() {
    const { data } = await supabase
      .from("creators")
      .select("*")
      .eq("id", id)
      .single();

    setCreator(data);
  }
  
  useEffect(() => {
    getCreator();
  }, []);



  if (!creator) return <p>Loading...</p>;

  return (
    <div className="creator-page">
      <h1>{creator.name}</h1>
      
        <img src={creator.imageURL} alt={creator.name} />
        <p>Creator's description: {creator.description}</p>
        <p>Creator's Url: {creator.url}</p>
        
            <div className="bottom-buttons">
            <a href={creator.url} target="_blank">
                <button>Visit</button>
            </a>

            <Link to={`/edit/${creator.id}`}>
                <button>Edit</button>
            </Link>
            </div>

    </div>
  );
}