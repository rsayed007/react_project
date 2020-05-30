import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'

// components
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Posts from './components/Posts'
import PostsItem from './components/PostsItem'


class App extends Component {
  render(){
    return (
        <BrowserRouter>
          <div>
            <header>
              <Link to='/' >Home</Link><br/>
              <Link to='/about'>About</Link><br/>
              <Link to={{
                pathname:'/profile'
              }} >Profile</Link> <br/>
              <Link to='/posts'>posts</Link><br/>
              <hr/>
            </header>
              <Switch>
                <Route path="/posts/:id" component={PostsItem} />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
                <Route path="/posts"  component={Posts} />
                <Route path="/"  component={Home} />
              </Switch>


              {/* with out switch  */}
            {/* 
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile" component={Profile} />
              <Route path="/posts" exact component={Posts} />
              <Route path="/posts/:id" component={PostsItem} /> */}


          </div>
        </BrowserRouter>
    ); 
  }
}

export default App;
