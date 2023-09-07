// import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
<<<<<<< HEAD
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
=======
  return (
    <div className="App">
      <NewExpense />
      <Expenses />
>>>>>>> parent of 895006d (87.dynamically list is maintained:))
    </div>
  );
}

export default App;
