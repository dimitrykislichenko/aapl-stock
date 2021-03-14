import React from 'react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  toLongDateFormat,
  toShortDateFormat,
  withCurrencySymbol,
} from './format';
import { IData } from '../../api/api';

interface IChartProps {
  data: (IData & { Value: number })[];
}

export const Chart: React.FC<IChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={data}>
      <XAxis
        dataKey="Date"
        tickFormatter={toShortDateFormat}
        stroke="#FFFFFF"
        tickLine={false}
        axisLine={false}
        interval="preserveEnd"
        tickMargin={14}
        minTickGap={80}
      />
      <YAxis
        type="number"
        domain={['dataMin', 'dataMax']}
        tickFormatter={withCurrencySymbol}
        stroke="#FFFFFF"
        tickMargin={16}
        orientation="left"
        axisLine={false}
        tickLine={false}
        interval="preserveEnd"
        minTickGap={80}
        yAxisId={0}
        width={80}
      />

      <Area
        type="monotone"
        strokeWidth={2}
        dot={false}
        dataKey="Value"
        fill="#FE0F7D"
        opacity="0.4"
        stroke="#FE0F7D"
      />
      <Tooltip labelFormatter={toLongDateFormat} />
    </AreaChart>
  </ResponsiveContainer>
);
