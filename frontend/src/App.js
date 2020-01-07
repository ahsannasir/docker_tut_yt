import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyPoster from './myPoster';

function App() {
  return (

   
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
        
        >
           <MyPoster></MyPoster>
        </a>
      {/* </header> */}
     
    </div>
  );
}

export default App;
