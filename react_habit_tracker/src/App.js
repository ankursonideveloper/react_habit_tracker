import "./App.css";
import { useState } from "react";
import Tracker from "./Components/Tracker";
import { habitData } from "./Information/Data";

function App() {
  let data = () => {
    return JSON.parse(localStorage.getItem("habits")) ?? habitData;
  };
  const [habits, setHabits] = useState(data);

  const modifyData = (id) => {
    setHabits((prev) => {
      const newData = prev.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      );
      localStorage.setItem("habits", JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <div className="flex mx-auto justify-center mt-10">
      <Tracker data={habits} handleHabit={modifyData} />
    </div>
  );
}

export default App;
