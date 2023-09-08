import "./ChartBar.css";

export default function ChartBar(props) {
  // console.log(props);

  let fillerHeight = 0;

  if (props.totalExpense > 0) {
    //calc. height of filler
    fillerHeight = Math.round((props.value / props.totalExpense) * 100);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__label">
        {fillerHeight < 10 ? "0" + fillerHeight : fillerHeight}%
      </div>
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillerHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
