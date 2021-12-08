import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function returnLines(values) {
  const colors = ['#1C77FF', '#5348B4', '#30B6D9', '#F98700'];
  if (values) {
    return values.map((key, index) => (
      <Line
        key={key}
        dataKey={key}
        type="monotone"
        stroke={colors[index]}
        strokeWidth={2}
      />
    ));
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
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        {returnLines(values)}
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ChartLineComplex;
