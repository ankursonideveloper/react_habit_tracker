import React from "react";

const Habit = (props) => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 m-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 gap-5">
      <p className="text-lg text-gray-800 font-medium">{props.habitName}</p>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" />
      </label>
    </div>
  );
};

export default Habit;
