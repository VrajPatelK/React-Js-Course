import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  //transform the points-object to point value
  let valuePoints = props.dataPoints.map((point) => point.value);
  //find total expense of all month expenses
  let totalExpense = valuePoints.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          totalExpense={totalExpense} //++
          label={point.label}
        />
      ))}
    </div>
  );
}
