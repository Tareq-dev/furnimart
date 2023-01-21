import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const data = [
    {
      name: "Jan",
      earn: 40000,
    },
    {
      name: "Feb",
      earn: 60000,
    },
    {
      name: "Mar",
      earn: 80000,
    },
    {
      name: "Apr",
      earn: 77780,
    },
    {
      name: "May",
      earn: 95800,
    },
    {
      name: "Jun",
      
      earn: 100500,
    
    },
    {
      name: "Jul",
    
      earn: 40000,
     
    },
  ];
  return (
    <div>
      <p className="text-xl text-center py-4 font-bold">Earning Statictics</p>
      <div style={{ width: "100%", height: 300 }} className="flex justify-center">
        <ResponsiveContainer>
        <AreaChart
          className="bg-white px-2"
          width={800}
          height={350}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="earn" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
       
      </div>
    </div>
  );
}

export default Chart;
