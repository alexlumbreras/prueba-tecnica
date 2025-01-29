import React from 'react';
import {
  BarChart as SimpleBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartProps {
  title: string;
  data: any[];
  dataKey: string;
  color: string;
  height: number;
  XAxisDataGroup: string;
  XAxisLabel?: string;
  showXAxisValues?: boolean;
}

export const BarChart: React.FC<ChartProps> = ({
  title,
  data,
  dataKey,
  color,
  height,
  XAxisDataGroup,
  XAxisLabel,
  showXAxisValues = false,
}) => {
  return (
    <div className="chart-item">
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={height}>
        <SimpleBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={XAxisDataGroup}
            tick={showXAxisValues}
            {...(XAxisLabel !== undefined && { label: XAxisLabel })}
          />
          <YAxis width={100} />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill={`#${color}`} />
        </SimpleBarChart>
      </ResponsiveContainer>
    </div>
  );
};
