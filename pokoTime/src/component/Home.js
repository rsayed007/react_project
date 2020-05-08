import React, { Component } from 'react';
import axios from 'axios'
// heir order component
import Rainbow from '../hoc/rainbow'

class Home extends Component {
    state ={
        posts: [],
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // console.log(res)
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render(){
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title" >{post.title}</span><hr/>
                            <p> {post.body} </p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No Post yet</div>
        )
        return(
            <div className="container ">
                {postList}
            </div>
        )
    }
}
export default Rainbow(Home);