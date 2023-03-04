import React from "react";
import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer, Tooltip, LabelList } from "recharts";

const Chart = ({ data, nameKey, totalKey }) => {
    console.log('chart', data)
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
            <XAxis stroke="white" dataKey={nameKey} />
            <YAxis type="number" stroke="white" domain={[0, 'dataMax+10']} />
            <Bar dataKey={totalKey} fill="#DD2A2A">
                <LabelList dataKey={totalKey} fill="white" position="top" />
            </Bar>
        </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
