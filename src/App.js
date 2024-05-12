import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import $ from "../node_modules/jquery/dist/jquery.js";

function App() {
  const [color, setChangeColor] = useState(-1);
  const [gridhistory, setGridHistory] = useState([]);
  const changeColor = (index) => {
    setChangeColor(index);
    var child = document.getElementsByClassName("grid-container")[0].children[index];
    $(child).css("background-color", "green");
    FNHistory(index);
  }
  async function FNHistory(index){
    if(!gridhistory.includes(index)){
        var colorlist = [...gridhistory.slice(0, gridhistory.length + 1), index];
        setGridHistory(colorlist);
        
    }
  }
  const changeColorByHistory = (v) =>{
    var child = document.getElementsByClassName("grid-container")[0].children[v];
    $(child).css("background-color", "white");
  }
  
  useEffect(()=>{
    var totallen = ($(".grid-container"))[0].children.length;
    if(gridhistory.length == totallen){
      var interval = 500;
      var rev = gridhistory.reverse();
      setGridHistory([])
      $.each(rev, function(i,v){
          setTimeout(function () {
           changeColorByHistory(v)
        }, i * interval);
      });
    }
  });
  return (
    <div className="App">
    <h1 style={{color: "red"}}>Grid Box Index: {color}</h1>
      <header className="App-header">
        <div className="grid-container">
          <div className="grid-item" onClick={() => changeColor(0)}></div>
          <div className="grid-item" onClick={() => changeColor(1)}></div>
          <div className="grid-item" onClick={() => changeColor(2)}></div>
          <div className="grid-item" onClick={() => changeColor(3)}></div>
          <div className="grid-item" onClick={() => changeColor(4)}></div>
          <div className="grid-item" onClick={() => changeColor(5)}></div>
          <div className="grid-item" onClick={() => changeColor(6)}></div>
          <div className="grid-item" onClick={() => changeColor(7)}></div>
          <div className="grid-item" onClick={() => changeColor(8)}></div>          
          <div className="grid-item" onClick={() => changeColor(9)}></div>
          <div className="grid-item" onClick={() => changeColor(10)}></div>
          <div className="grid-item" onClick={() => changeColor(11)}></div>
          <div className="grid-item" onClick={() => changeColor(12)}></div>
          <div className="grid-item" onClick={() => changeColor(13)}></div>
          <div className="grid-item" onClick={() => changeColor(14)}></div>
          <div className="grid-item" onClick={() => changeColor(15)}></div>
          <div className="grid-item" onClick={() => changeColor(16)}></div>
          <div className="grid-item" onClick={() => changeColor(17)}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
