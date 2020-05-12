import React from 'react';
import './App.css';

// component
import Navbar from './component/Navbar'
import Details from './component/Details'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Details/>
      </div>
    </div>
  );
}

export default App;
