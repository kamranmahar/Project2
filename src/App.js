import React from 'react';
import './App.css';
import Techlist from './Techlist';
function App(props) {
  return (
    <div className="App">
      <p>
      
  <h1>{props.name}</h1>
  <p>i am a web Deloper and application designer with Experince {props.exp-10}</p>
    </p>
    
    <Techlist firstName={props.name} techName='Technologies' />
    </div>
  );
}

export default App;
