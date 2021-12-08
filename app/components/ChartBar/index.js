import React, { memo, PureComponent } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import { Typography } from '@material-ui/core';

class CustomTooltip extends PureComponent {
  render() {
    const { active, payload, title } = this.props;
    if (active) {
      return (
        <div
          className="MuiTooltip-tooltip"
          style={{ width: 'max-content', textAlign: 'center' }}
        >
          <Typography variant="subtitle1" className="text-white">
            {payload[0].value}
          </Typography>
          <Typography variant="subtitle2" className="text-white">
            {title}: {payload[0].payload.name}
          </Typography>
        </div>
      );
    }
    return null;
  }
}

function ChartBar(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={props.data}
        margin={{
          right: 20,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="value"
          maxBarSize={10}
          radius={[30, 30, 30, 30]}
          fill="#234363"
          background={{ fill: '#eee', radius: [30, 30, 30, 30] }}
        />
        <XAxis dataKey="name" />
        <Tooltip
          content={<CustomTooltip title={props.title} />}
          cursor={{ fill: 'transparent' }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default memo(ChartBar);
