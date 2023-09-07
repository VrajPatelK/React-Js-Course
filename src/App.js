// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Initial_Expenses = [
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

function App() {
  //state manage ..
  const [expenses, setExpenses] = useState(Initial_Expenses); // all
  const [filteredExpenses, setFilteredExpenses] = useState(expenses); // filetered

  //update..
  function addNewExpense(newExpense) {
    setExpenses((prevExpenses) => {
      let updatedExpenses = [newExpense, ...prevExpenses]; // add new expense

      setFilteredExpenses(updatedExpenses); // update the filtered state
      return updatedExpenses; // update the expenses state
    });
  }

  function changedFilterHandler(selectedYear) {
    let filtered = expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });

    setFilteredExpenses(filtered);
  }

  // return ..
  return (
    <div className="App">
      <NewExpense onAddNew={addNewExpense} />
      <Expenses
        expenses={filteredExpenses}
        onChnageFilte={changedFilterHandler}
      />
    </div>
  );
}

export default App;
