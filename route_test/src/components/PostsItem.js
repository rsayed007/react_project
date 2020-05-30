
import React, { Component } from 'react';


class PostsItem extends Component {
  render(){
      console.log(this.props.match.params)
    return (
      <div >
        PostsItem id : - {this.props.match.params.id}
      </div>
    );
  }
}

export default PostsItem;
