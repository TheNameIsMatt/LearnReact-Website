import Sidebar_Home from "./Components/Sidebar_Home";
import React, { useEffect, useState } from 'react';
import MainCards from "./Components/MainCards";
import './App.css';
import './Components/Utilities/Utilities.css';
import './Components/Utilities/ButtonStyles.css'
import img1 from './Components/Images/shy.png'




function importAll(r) {

  let images = [];
  r.keys().map((item, index) => { images.push(r(item)); });
  return images;
}

function App() {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    setImages(importAll(require.context('./Components/Images', false, /\.(png|jpe?g|svg)$/)));
  }, []);

  return (
    <div className="pagewrapper">
      <div className="one"><Sidebar_Home></Sidebar_Home></div>

      <div className="maininfoparent">
        <div className="homeservetext">HomeServe</div>
      </div>
      <div className="maininfoparent">
        <div className="twentyeightygrid">
          <div  className="twentyeightychild tworowcontainer">
            <img src={Images[1]}></img>
            <button className="glow-on-hover" type="button" onClick={() => handleGlowButtonClick()}>Press Me</button>
          </div>
          <div id="floop" className="twentyeightychild"><MainCards></MainCards></div>
        </div>
      </div>
      <div className="maininfoparent"><MainCards name="fleebo"></MainCards></div>

    </div>
  );

  function handleGlowButtonClick(){
    document.getElementById("floop");
  }
}

export default App;
