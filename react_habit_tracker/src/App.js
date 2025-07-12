import logo from "./logo.svg";
import "./App.css";
import Tracker from "./Components/Tracker";
import { data } from "./Information/Data";

function App() {
  return (
    <div className="flex mx-auto justify-center mt-10">
      <Tracker data={data} />
    </div>
  );
}

export default App;
