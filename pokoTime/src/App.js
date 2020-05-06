import React, { Component } from 'react';
import Navebar from './component/Navebar'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navebar/>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
