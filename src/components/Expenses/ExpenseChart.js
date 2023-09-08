import Chart from "../Chart/Chart";

export default function ExpenseChart(props) {
  //chart-data-point-object chart..
  let dataPoints = [
    { label: "Jan", value: 0 }, // 0th indx..
    { label: "Feb", value: 0 }, //1st indx..
    { label: "Mar", value: 0 }, //..
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // month wise expense stored..
  props.expenses.forEach((expense) => {
    let month = expense.date.getMonth(); // give 0 if it is "jan", 1 if it is "feb"..
    dataPoints[month].value += expense.amount; // month wise expense stored..
  });

  return <Chart dataPoints={dataPoints} />;
}
