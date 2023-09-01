import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.toLocaleString("default", { day: "numeric" });
  const year = props.date.toLocaleString("default", { year: "numeric" });

  return (
    <div className="expense-date-item">
      <div className="expense-month">{month}</div>
      <div className="expense-day">{day}</div>
      <div className="expense-year">{year}</div>
    </div>
  );
}
