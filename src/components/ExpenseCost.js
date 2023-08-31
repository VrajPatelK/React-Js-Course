import "./ExpenseCost.css";

export default function ExpenseCost(props) {
  return (
    <div className="expense-cost">
      <span>${props.cost}</span>
    </div>
  );
}
