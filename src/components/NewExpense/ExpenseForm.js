import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  //
  const [title, setTitle] = useState("");
  const [amt, setAmt] = useState("");
  const [cal, setCal] = useState("");

  //
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  //
  const amtChangeHandler = (e) => {
    setAmt(e.target.value);
  };
  //
  const calChangeHandler = (e) => {
    setCal(e.target.value);
  };

  //
  const sumbitHadler = (e) => {
    e.preventDefault();

    let newExpense = {
      id: Math.random().toString(),
      title: title,
      amount: amt,
      date: new Date(cal),
    };

    props.onAddNewExpense(newExpense);
    props.onChangeContent(false); // hide the form
  };

  //
  const hideForm = () => {
    props.onChangeContent(false); // hide the form
  };

  return (
    <div>
      <form onSubmit={sumbitHadler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <input
              type="text"
              name=""
              id=""
              placeholder="Title"
              value={title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <input
              type="number"
              name=""
              id=""
              min="0.01"
              step="0.01"
              value={amt}
              placeholder="Amount"
              onChange={amtChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <input type="date" name="" id="" onChange={calChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={hideForm}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
