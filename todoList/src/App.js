import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo'


class App extends Component {

  state = {
    todos: [
      {id:1, content: 'by some apple'},
      {id:2, content: 'need to take sower'}
    ]
  }

  deleteTodo = (id) => {
    console.log(id)
    let todos = this.state.todos.filter( todo =>{
     return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) =>{
    console.log(todo);
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })

  }
  render(){
    return (
      <div className="App container card">
        <div className="card-body">
          <div className="card-header">
            <h2 className="card-heading text-center ">This is your Todo</h2>
          </div>
          <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo}/>
          <div className="card-footer">
            <h4 className=" text-center ">Footer</h4>
          </div>
        </div>
      </div>
      // <div class="card">
      //   <img class="card-img-top" src="holder.js/100x180/" alt="">
      //   <div class="card-body">
      //     <h4 class="card-title">Title</h4>
      //     <p class="card-text">Text</p>
      //   </div>
      // </div>
    );
  }
}

export default App;
