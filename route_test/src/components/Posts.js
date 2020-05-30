import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Posts extends Component {
  render(){
    return (
      <div >
        <Link to="/posts/1">post 1</Link> <br/>
        <Link to="/posts/2" >post 2</Link><br/>
        <Link to="/posts/3">post 3</Link><br/>
      </div>
    );
  }
}

export default Posts;
