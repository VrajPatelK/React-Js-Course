import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  //
  function handleNewExpense(newExpense) {
    props.onAddNew(newExpense);
    // console.log(newExpense);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={handleNewExpense} />
    </div>
  );
}
