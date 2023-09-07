import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import AddNewExpenseButton from "./AddNewExpenseButton";

import "./NewExpense.css";

export default function NewExpense(props) {
  //
  function handleNewExpense(newExpense) {
    props.onAddNew(newExpense);
  }

  //button
  let expenseButton = <AddNewExpenseButton onChangeContent={changeContent} />;
  //form
  let expenseForm = (
    <ExpenseForm
      onAddNewExpense={handleNewExpense}
      onChangeContent={changeContent}
    />
  );

  // state of content
  const [isFormDisplay, setIsFormDisplay] = useState(false); // initialized by button

  //based on call change the content
  function changeContent(flag) {
    setIsFormDisplay(flag);
  }

  return (
    <div className="new-expense">
      {isFormDisplay ? expenseForm : expenseButton}
    </div>
  ); // display content
}
