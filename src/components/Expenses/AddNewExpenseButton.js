export default function AddNewExpenseButton(props) {
  //
  function displayForm() {
    props.onChangeContent(true);
  }

  return (
    <div>
      <button onClick={displayForm}> Add New Expense</button>
    </div>
  );
}
