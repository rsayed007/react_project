import React from 'react';

const Todo = ({todos, deleteTodo})=> {


    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <p className="alert alert-success" key={todo.id}>
                    <span >{todo.content}</span><button className="float-right btn-danger" onClick={ ()=>{ deleteTodo(todo.id)}}>X</button>
                </p> 
                
            )
        })
    ):(
        <p className="card-text text-center"> You do note have any todo's yeats </p>
    )
    return(
        <div className="text-center  card-text col-md-12">
            {todoList}
        </div>
        
    )
}
export default Todo;

