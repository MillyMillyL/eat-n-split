import React from "react";
import { Button } from "./Button";

export const Friend = ({ item, handleSelectedFriend, seletedFriend }) => {
  const isSelected = seletedFriend?.id === item.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>
      {item.balance === 0 && <p>You and {item.name} are even</p>}

      {item.balance < 0 && (
        <p className="red">
          You owe {item.name} {Math.abs(item.balance)}
        </p>
      )}

      {item.balance > 0 && (
        <p className="green">
          {item.name} owes you {item.balance}
        </p>
      )}

      <Button onClick={() => handleSelectedFriend(item)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};
