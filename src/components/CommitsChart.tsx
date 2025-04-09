import { Card, CardContent } from "../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "../components/ui/chart";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

interface Props {
  data: { date: string; count: number }[];
}

const CommitChart = ({ data }: Props) => {
  const chartData = data.map((item) => ({
    date: item.date,
    commits: item.count,
  }));

  const chartConfig = {
    commits: {
      label: "Commits",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="w-full max-w-4xl mx-auto mt-6 bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          📊 Commit Chart
        </h2>
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="commits"
              fill="var(--color-commits)"
              radius={[8, 8, 0, 0]}
              barSize={24}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CommitChart;
