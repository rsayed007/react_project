import React, { Component } from 'react';
import Navebar from './component/Navebar'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Post from './component/Post'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navebar/>
          <Route exact exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/posts/:post_id' component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
