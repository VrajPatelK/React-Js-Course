import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

import "./Expenses.css";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

export default function Expenses(props) {
  // maintain year on filter..
  const [selectedYear, setSelectedYear] = useState("2020");
  function updateFilterYear(year) {
    setSelectedYear(year);
  }

  return (
    <Card className="expenses-container">
      <ExpenseFilter
        selectedYear={selectedYear}
        onFilterChange={updateFilterYear}
      />
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
}
