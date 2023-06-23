import React from "react";
import { Friend } from "./Friend";

export const FriendList = ({
  friends,
  handleSelectedFriend,
  seletedFriend,
}) => {
  return (
    <ul>
      {friends.map((item) => (
        <Friend
          item={item}
          key={item.id}
          handleSelectedFriend={handleSelectedFriend}
          seletedFriend={seletedFriend}
        />
      ))}
    </ul>
  );
};
