import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []);

  async function getCreators() {
    const { data } = await supabase.from("creators").select("*");
    setCreators(data);
  }

  return (
    <div>
      <h1>Creatorverse</h1>

      <Link to="/add">➕ Add Creator</Link>

      {creators.length === 0 ? (
        <p>No creators yet</p>
      ) : <div className="creator-grid">
      {creators.map((c) => (
        <CreatorCard key={c.id} creator={c} />
      ))}
    </div>
}
    </div>
  );
}