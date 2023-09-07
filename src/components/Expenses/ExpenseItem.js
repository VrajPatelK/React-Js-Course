import ExpenseDate from "./ExpenseDate";
import ExpenseCost from "./ExpenseCost";
import Card from "../UI/Card";

import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item-container">
      <ExpenseDate date={props.date} />
      <div className="expense-description">{props.title}</div>
      <ExpenseCost cost={props.amount} />
    </Card>
  );
}
