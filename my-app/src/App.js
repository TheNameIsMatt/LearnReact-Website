import SidebarHome from "./Components/Sidebar_Home";
import React, { useEffect, useState } from 'react';
import MainCards from "./Components/MainCards";
import './App.css';
import './Components/Utilities/Utilities.css';
import './Components/Utilities/ButtonStyles.css'

function importAll(r) {

  let images = [];
  r.keys().map((item, index) => { images.push(r(item)); });
  return images;
}

function App() {
  const [Images, setImages] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [RefreshAPI, setRefreshAPI] = useState(false);
  const [count, setCount] = useState(0);


  function increaseCount() {
    setCount(prevCount => prevCount + 1);
  }

  const loadData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setAPIData(json))
  }

  function handleGlowButtonClick(param) {
    document.getElementById("floop");
    increaseCount()
    setRefreshAPI(!param)
  }
  useEffect(() => {
    //A Directory to search, whether to search subdirectories and a regex of what to fetch
    setImages(importAll(require.context('./Components/Images', false, /\.(png|jpe?g|svg)$/)));
    loadData();

  }, []);

  useEffect(() => {

    console.log("useEffect being called to refresh");
    loadData();

  }, [RefreshAPI])

  return (
    <div className="pagewrapper" >
      <div className="one"><SidebarHome></SidebarHome></div>

      <div className="maininfoparent">
        <div className="toptitlebar">
            <h1>HomeServe</h1>
        </div>
        <div className="twentyeightygrid">
          <div className="twentyeightychild tworowcontainer">
            <img alt="hello" src={Images[1]}></img>
            <button className="glow-on-hover" type="button" onClick={() => handleGlowButtonClick(RefreshAPI)}>Press Me</button>
          </div>
          <div id="floop" className="twentyeightychild">
            <MainCards APIData={APIData} count={count}></MainCards>
          </div>
        </div>

        <MainCards APIData={APIData} count={count}></MainCards>
        <MainCards APIData={APIData} count={count}></MainCards>
        <MainCards APIData={APIData} count={count}></MainCards>
        <MainCards APIData={APIData} count={count}></MainCards>

      </div>



    </div>
  );
}

export default App;
