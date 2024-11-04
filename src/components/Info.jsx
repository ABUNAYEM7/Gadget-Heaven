import React from "react";

const Info = ({ title, subtitle }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="w-full md:w-4/5 mx-auto text-center space-y-4 text-white my-6">
        <h3 className="text-2xl md:text-3xl font-bold ">{title}</h3>
        <p className="text-lg font-medium w-full md:w-2/3 mx-auto">{subtitle}</p>
      </div>
    </div>
  );
};

export default Info;
