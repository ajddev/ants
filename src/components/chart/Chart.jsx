import "./index.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 12 },
  { name: "February", Total: 21 },
  { name: "March", Total: 8 },
  { name: "April", Total: 16 },
  { name: "May", Total: 9 },
  { name: "June", Total: 17 },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last 6 Months (Completed Projects)</div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#679186" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#679186" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#679186"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
