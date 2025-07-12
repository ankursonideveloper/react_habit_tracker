import React, { useState } from "react";
import Habit from "./Habit";

const Tracker = (props) => {
  const totalHabits = props.data.length;
  const initialCompletedHabitsCount = props.data.filter((item, index) => {
    return item.completed === true;
  }).length;

  const [habitCompletedCount, setHabitCompletedCount] = useState(
    initialCompletedHabitsCount
  );

  return (
    <div className="max-w-xl mx-auto mt-6 p-6 bg-gray-100 rounded-2xl shadow-lg">
      <div className="flex justify-center items-center px-4 py-2 bg-white rounded-lg shadow-sm mb-4 gap-2">
        <p className="text-lg font-semibold text-gray-700">
          {habitCompletedCount}/{totalHabits}
        </p>
        <p className="text-lg font-semibold text-gray-700">Completed</p>
      </div>
      <div className="flex justify-between items-center px-4 py-2 bg-white rounded-lg shadow-sm mb-4">
        <p className="text-lg font-semibold text-gray-700">Habit</p>
        <p className="text-lg font-semibold text-gray-700">Today</p>
      </div>
      {props.data.map((item, index) => (
        <Habit key={index} habitName={item.habitName} />
      ))}
    </div>
  );
};

export default Tracker;
