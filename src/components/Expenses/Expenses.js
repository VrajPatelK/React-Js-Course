import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

import "./Expenses.css";
import { useState } from "react";

export default function Expenses() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // maintain year on filter..
  const [selectedYear, setSelectedYear] = useState("2020");
  function updateFilterYear(year) {
    setSelectedYear(year);
    props.onChnageFilte(year);
  }

  return (
    <Card className="expenses-container">
      <ExpenseFilter
        selectedYear={selectedYear}
        onFilterChange={updateFilterYear}
      />
<<<<<<< HEAD
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
=======
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
>>>>>>> parent of 895006d (87.dynamically list is maintained:))
    </Card>
  );
}
