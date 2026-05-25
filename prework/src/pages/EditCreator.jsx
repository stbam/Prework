

import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams, useNavigate } from "react-router-dom";

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

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

 
  function handleChange(e) {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();

    await supabase
      .from("creators")
      .update(creator)
      .eq("id", id);

    navigate("/");
  }

  async function handleDelete() {
    await supabase.from("creators").delete().eq("id", id);
    navigate("/");
  }

  if (!creator) return <p>Loading...</p>; 

  return (
    <form onSubmit={handleUpdate}>
      <input name="name" value={creator.name} onChange={handleChange} />
      <input name="url" value={creator.url} onChange={handleChange} />
      <input name="imageURL" value={creator.imageURL || ""} onChange={handleChange} />
      <textarea name="description" value={creator.description} onChange={handleChange} />

      <button type="submit">Update</button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </form>
   
  );
}