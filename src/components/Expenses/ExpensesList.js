import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

// based on condition display content..
export default function ExpenseList(props) {
  // if len == 0
  if (props.expenses.length === 0) {
    return <h3 className="expenses-list__fallback">Not Found Expenses</h3>;
  }

  // if len > 0
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
