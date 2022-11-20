import Sidebar_Home from "./Components/Sidebar_Home";
// Example of importing something from icons back
//import { IconName } from "react-icons/fa";
import MainCards from "./Components/MainCards";
import './App.css';
import './Components/Utilities/Utilities.css';

function App() {
  return (
    <div className="pagewrapper">
      <div className="one"><Sidebar_Home></Sidebar_Home></div>

      <div className="maininfoparent">
        <div className="homeservetext">HomeServe</div>
      </div>
      <div className="maininfoparent">
        <div className="twentyeightygrid">
          <div className="twentyeightychild"><MainCards></MainCards></div>
          <div className="twentyeightychild"><MainCards></MainCards></div>
        </div>
      </div>
      <div className="maininfoparent"><MainCards></MainCards></div>

    </div>
  );
}

export default App;
