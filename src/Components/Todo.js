import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks:[{id:1,text:'Task-1'},{id:2,text:'Task-2'},{id:3,text:'Task-3'}],
            currTask:''
        }
    }
    handleChange = (e) => {
        let val = e.target.value;
        console.log(val);
        this.setState({currTask:val});
    }
    onSubmit = () =>{
        // this.state.tasks.push({id:this.state.tasks.length + 1,text:this.state.currTask});
        // this.state.currTask = '';
        // console.log(this.state);

        let nta = [...this.state.tasks,{id:this.state.tasks.length+1,text:this.state.currTask}];
        this.setState({
            tasks:nta,
            currTask:'',
        })
    }
    render() {
        return (
            <div>
                <div className="input-container">
                    <input onChange={this.handleChange} value={this.state.currTask} type="text" />
                    <button onClick={this.onSubmit}>Add</button>
                </div>
                <div className="class-list">
                    <ul>
                       {
                          this.state.tasks.map(task => ( //here parantheses are used becuz we are using or returning jsx inside it
                              <li key={task.id}>
                                  <h1>{task.text}</h1>
                                  <button>Delete</button>
                              </li>
                          ))
                       } 
                    </ul>
                </div>
            </div>
        )
    }
}

