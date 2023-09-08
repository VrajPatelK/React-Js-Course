import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

import "./Expenses.css";

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
      <ExpenseChart expenses={filteredExpenses} />

      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
}
