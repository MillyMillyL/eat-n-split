import React, { useState } from "react";
import { Button } from "./Button";

export const SplitBill = ({ seletedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill ? bill - yourExpense : "";
  const [payer, setPayer] = useState("user");

  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill || !yourExpense) return;
    onSplitBill(payer === "user" ? friendExpense : -yourExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>SPLIT BILL WITH {seletedFriend.name}</h2>

      <label htmlFor="">Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label htmlFor="">Your Expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(+e.target.value > bill ? yourExpense : +e.target.value)
        }
      />

      <label htmlFor="">{seletedFriend.name}'s Expense</label>
      <input type="text" value={friendExpense} disabled />

      <label htmlFor="">Who's paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{seletedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};
