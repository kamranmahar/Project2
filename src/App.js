import React from 'react';
import logo from './logo.svg';
import './App.css';
import Techlist from './Techlist';
function App(props) {
  return (
    <div className="App">
      <p>
      <img src="logo.svg" align="left"></img>
  <h1>{props.name}</h1>
  <p>i am a web Deloper and application designer with Experince {props.exp-10}</p>
    </p>
    
    <Techlist firstName={props.name} />
    </div>
  );
}

export default App;
