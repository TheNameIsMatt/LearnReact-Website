import Sidebar_Home from "./Components/Sidebar_Home";
// Example of importing something from icons back
 //import { IconName } from "react-icons/fa";
 import MainCards from "./Components/MainCards";
 import './App.css';

function App() {
  return (
    <div className="pagewrapper">
      <div className="one"><Sidebar_Home></Sidebar_Home></div>
      
      <div className="cards"><MainCards></MainCards></div>
    </div>
  );
}

export default App;
