import React, {Component} from 'react';

class AddTodo extends Component{
    state = {
        content: ''
    }
    
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <label>Add your task</label>
                    <input className="form-control" onChange={this.handleChange} value={this.state.content} placeholder="add your task"/>
                </form>
            </div>
        )
    }
}
export default AddTodo;