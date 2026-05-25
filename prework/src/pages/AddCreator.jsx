

import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

export default function AddCreator() {
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: ""
  });

  function handleChange(e) {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await supabase.from("creators").insert(creator);

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="url" placeholder="URL" onChange={handleChange} />
      <input name="imageURL" placeholder="Image URL" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />

      <button type="submit">Create</button>
    </form>);
    
  
}

