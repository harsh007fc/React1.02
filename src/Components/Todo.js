import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const tasks = [{id:1,text:'You are the love charger'},{id:2,text:'You are the love charger'},{id:3,text:'You are the love charger'}];
        return (
            <div>
                <div className="input-container">
                    <input type="text" />
                    <button>Add</button>
                </div>
                <div className="class-list">
                    <ul>
                       {
                          tasks.map(task=>(
                              <li>
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

