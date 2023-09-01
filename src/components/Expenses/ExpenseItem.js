import ExpenseDate from "./ExpenseDate";
import ExpenseCost from "./ExpenseCost";
import Card from "../UI/Card";

import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item-container">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-description">{props.expense.title}</div>
      <ExpenseCost cost={props.expense.amount} />
    </Card>
  );
}
