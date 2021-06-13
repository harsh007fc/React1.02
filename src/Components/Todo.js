import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks:[{id:1,text:'Task-1'},{id:2,text:'Task-2'},{id:3,text:'Task-3'}],
            // currTask:''
        }
    }
    // handleChange = (e) => {
    //     let val = e.target.value;
    //     console.log(val);
    //     this.setState({currTask:val});
    // }
    onSubmit = (task) =>{
        // this.state.tasks.push({id:this.state.tasks.length + 1,text:this.state.currTask});
        // this.state.currTask = '';
        // console.log(this.state);

        let newTaskArray = [...this.state.tasks,{id:this.state.tasks.length+1,text:task}];
        this.setState({
            tasks:newTaskArray,
            currTask:'',
        })
    }
    onDelete = (id) => {
        console.log(this);
        let newTaskArray = this.state.tasks.filter(task =>{
            return task.id!=id;
        })
        this.setState({tasks:newTaskArray})
    }
    render() {
        console.log('todo render');
        return (
            <>
            <InputComponent   onSubmit={this.onSubmit}/>
            <TaskList tasks={this.state.tasks} onDelete={this.onDelete}/>
            </>
        )
    }
}



class InputComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            currTask:''
        }
    }
    handleChange = (e)=>{
        this.setState({currTask:e.target.value})
    }
    render() {
        console.log('input render');
        return (
            <div className="input-container">
                <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
                <button onClick={()=>{
                    this.props.onSubmit(this.state.currTask)
                    this.setState({currTask:''});
                }}>Add</button>
            </div>
        )
    }
}


class TaskList extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        console.log('tasklist render');
        return (
            <div className="class-list">
            <ul>
               {
                  this.props.tasks.map(task => ( //here parantheses are used becuz we are using or returning jsx inside it
                      <li key={task.id}>
                          <h1>{task.text}</h1>
                          <button onClick={()=>this.props.onDelete(task.id)}>Delete</button>
                      </li>
                  ))
               } 
            </ul>
        </div>
        )
    }
}

