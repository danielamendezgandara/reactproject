import React from "react";
import ReactDOM from "react-dom";

const style = {
    color : "red"
}

const tictac = ()  =>{
      const element = (
        <div>
          <h1 style={style}> Reloj React</h1>
          <h2>Son las { new Date().toLocaleTimeString()}</h2>
        </div>
      )
      const container = document.getElementById("root");
      ReactDOM.render(element,container);
};

setInterval(tictac,1000);
