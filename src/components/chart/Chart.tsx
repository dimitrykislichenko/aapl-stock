import React from 'react';
import styled from 'styled-components';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Header } from './Header';
import {
  toLongDateFormat,
  toShortDateFormat,
  withCurrencySymbol,
} from './format';
import { IData } from '../../api/api';

interface IChartProps {
  header: string;
  data: (IData & { Value: number })[];
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Chart: React.FC<IChartProps> = ({ header, data }) => (
  <Wrapper>
    <Header>{header}</Header>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 0, left: 0, right: 5, bottom: 0 }}>
        <XAxis
          dataKey="Date"
          tickFormatter={toShortDateFormat}
          stroke="#FFFFFF"
          tickLine={false}
          axisLine={false}
          interval="preserveEnd"
          tickMargin={14}
          minTickGap={80}
          height={40}
        />
        <YAxis
          type="number"
          domain={['dataMin', 'dataMax']}
          tickFormatter={withCurrencySymbol}
          stroke="#FFFFFF"
          tickMargin={16}
          orientation="right"
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
        <Tooltip
          cursor={true}
          formatter={withCurrencySymbol}
          labelFormatter={toLongDateFormat}
          labelStyle={{ paddingTop: 4 }}
          contentStyle={{
            padding: '10px 14px',
            borderRadius: 10,
            borderColor: '#FE0F7D',
            color: 'black',
          }}
          wrapperStyle={{ top: -70, left: -10 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </Wrapper>
);
