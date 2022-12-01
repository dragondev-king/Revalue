import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function returnLines(values, current) {
  const colors = ['#1C77FF', '#5348B4', '#30B6D9', '#F98700'];
  if (values) {
    // eslint-disable-next-line array-callback-return,consistent-return
    return values.map((key, index) => {
      if (key === `P${current}`) {
        return (
          <Line
            key={key}
            dataKey={key}
            type="monotone"
            stroke={colors[index]}
            strokeWidth={2}
          />
        );
      }
    });
  }
  return <></>;
}

function processData(data) {
  const values = [];
  if (data) {
    data.forEach((item, index) => {
      if (item.properties) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(item.properties)) {
          if (index === 0) {
            values.push(key);
          }
          // eslint-disable-next-line no-param-reassign
          item[key] = value;
        }
      }
    });
  }
  return values;
}

function ChartLineComplex(props) {
  const values = processData(props.data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        margin={{
          right: 40,
          left: 10,
          bottom: 10,
        }}
        data={props.data}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[props.min - 2000, props.max + 2000]} />
        <CartesianGrid />
        <ReferenceLine
          y={props.max}
          label={props.maxLabel}
          stroke="red"
          isFront="true"
        />
        <ReferenceLine
          y={props.actual}
          label={props.actualLabel}
          stroke="red"
          isFront="true"
        />
        <ReferenceLine
          y={props.min}
          label={props.minLabel}
          stroke="red"
          isFront="true"
        />
        {returnLines(values, props.current)}
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ChartLineComplex;
