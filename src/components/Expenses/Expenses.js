import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

import "./Expenses.css";
import { useState } from "react";

export default function Expenses(props) {
  // maintain year on filter..
  const [selectedYear, setSelectedYear] = useState("2020"); // initialized year

  //
  function updateFilterYear(year) {
    setSelectedYear(year);
  }

  //filter manage..
  let filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses-container">
      <ExpenseFilter
        selectedYear={selectedYear}
        onFilterChange={updateFilterYear}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
