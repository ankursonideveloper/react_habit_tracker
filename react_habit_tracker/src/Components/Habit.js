import React from "react";

const Habit = (props) => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 m-2 rounded-lg shadow-sm gap-5">
      <p className="text-lg text-gray-800 font-medium">
        {props.data.habitName}
      </p>
      <label className="inline-flex items-center ">
        <input
          key={props.data.id}
          type="checkbox"
          checked={props.data.completed}
          onChange={() => {
            props.handleHabit(props.data.id);
          }}
        />
      </label>
    </div>
  );
};

export default Habit;
