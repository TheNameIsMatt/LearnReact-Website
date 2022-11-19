import Sidebar_Home from "./Components/Sidebar_Home";
// Example of importing something from icons back
//import { IconName } from "react-icons/fa";
import MainCards from "./Components/MainCards";
import './App.css';

function App() {
  return (
    <div className="pagewrapper">
      <div className="one"><Sidebar_Home></Sidebar_Home></div>

      <div className="maininfocolumn"><MainCards></MainCards></div>
      <div className="maininfocolumn">
        <div className="twentyeightygrid">
          <div className="twenty"><MainCards></MainCards></div>
          <div className="eighty"><MainCards></MainCards></div>
        </div>
      </div>
      <div className="maininfocolumn">
        <div className="twentyeightygrid">
          <div className="eighty"><MainCards></MainCards></div>
          <div className="twenty"><MainCards></MainCards></div>
        </div>
      </div>

      <div className="maininfocolumn"><MainCards></MainCards></div>

    </div>
  );
}

export default App;
