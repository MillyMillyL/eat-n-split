import React, { useState } from "react";
import { Button } from "./Button";

export const AddFriend = ({ handleAddFriend }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  function handleAddFriendSubmit(e) {
    e.preventDefault();
    if (!name || !url) return;
    const id = crypto.randomUUID();

    const newFriend = { name, image: `${url}?=${id}`, id, balance: 0 };
    handleAddFriend(newFriend);
    setName("");
    setUrl("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriendSubmit}>
      <label>👯‍♀️ Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>👩‍💼 Image URL</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />

      <Button>+ Add</Button>
    </form>
  );
};
