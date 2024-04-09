import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: any;
  options?: any;
}

const defaultOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export default function Chart({ data, options }: ChartProps) {
  if (!data) {
    return null;
  }

  const opts = { ...defaultOptions, ...options };

  return (
    <div className="border border-solid border-gray-200 rounded-md shadow-md p-5 relative">
      <Line options={opts} data={data} />
    </div>
  );
}
