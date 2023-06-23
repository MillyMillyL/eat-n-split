import { useState } from "react";
import { AddFriend } from "./components/AddFriend";
import { Button } from "./components/Button";
import { FriendList } from "./components/FriendList";
import { SplitBill } from "./components/SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriendOpen, setAddFriendOpen] = useState(false);
  const [seletedFriend, setSelectedFriend] = useState(null);

  function handleAddFriendClick() {
    setAddFriendOpen((prev) => !prev);
  }

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    setAddFriendOpen(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setAddFriendOpen(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === seletedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          handleSelectedFriend={handleSelectedFriend}
          seletedFriend={seletedFriend}
        />
        {addFriendOpen && <AddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleAddFriendClick}>
          {!addFriendOpen ? "Add Friend" : "Close"}
        </Button>
      </div>
      {seletedFriend && (
        <SplitBill
          seletedFriend={seletedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
