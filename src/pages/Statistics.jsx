import React from "react";
import UseTitle from "../hooks/useTitle";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";
import Info from "../components/Info";

const Statistics = () => {
  UseTitle("Gadget Heaven||Statistics");
  const data = useLoaderData();
  return (
    <div className="min-h-[450px]">
      <div className="max-w-screen-2xl mx-auto mb-6 bg-highlight  p-4">
        <div className="max-w-screen-xl mx-auto min-h-[300px]">
          <Info
            title={"Welcome To Gadget Heaven"}
            subtitle={
              "Comparing Customer Ratings and Prices of Top-Rated Gadgets to Help You Make the Best Choice at Gadget Heaven"
            }
          />
        </div>
      </div>
      <div className='md:relative w-11/12 lg:max-w-[1100px] h-[410px]  mx-auto'>
        <div className='outline-offset-4 outline-double outline-white rounded-xl p-4  backdrop-blur-md backdrop-blur-50 lg:absolute lg:-top-64  inset-0 m-auto  h-full'>
      <div className='w-full h-full '>
      <div className="h-full w-full md:p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={500}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" stackId="a" fill="#8884d8" />
            <Bar dataKey="rating" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Statistics;
