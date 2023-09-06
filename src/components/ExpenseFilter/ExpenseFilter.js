import "./ExpenseFilter.css";

export default function ExpenseFilter(props) {
  //
  const changeYearHandler = (e) => {
    props.onFilterChange(e.target.value);
  };

  //
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <h4>Filter By year</h4>
        <select value={props.selectedYear} onChange={changeYearHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>

      {/* Filter Dashboard component */}
    </div>
  );
}
