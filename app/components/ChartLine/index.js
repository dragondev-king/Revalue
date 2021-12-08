import React, { PureComponent } from 'react';
import { Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Typography } from '@material-ui/core';

class CustomTooltip extends PureComponent {
  render() {
    const { active, payload, measure } = this.props;
    if (active) {
      return (
        <div
          className="MuiTooltip-tooltip"
          style={{ width: 'max-content', textAlign: 'center' }}
        >
          <Typography variant="subtitle1" className="text-white">
            {payload[0].value} {measure}
          </Typography>
          <Typography variant="subtitle2" className="text-white">
            {payload[0].payload.name}
          </Typography>
        </div>
      );
    }
    return null;
  }
}

function ChartLine(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={props.data}>
        <defs>
          <linearGradient id={props.color} x1="0" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor={props.color} stopOpacity={0.3} />
            <stop offset="85%" stopColor={props.color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          dataKey="value"
          type="monotone"
          dot={{ stroke: props.color, r: 1.5 }}
          stroke={props.color}
          fillOpacity={1}
          fill={`url(#${props.color})`}
        />
        <Tooltip
          content={<CustomTooltip measure={props.measure} />}
          cursor={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ChartLine;
