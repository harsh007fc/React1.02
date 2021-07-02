import React,{useState} from 'react'

function Counter() {
    //useState returns us a pair of values
    //current state and a function used to change the current state
    //we pass the initial value of our usestate as the argument
    // 0 wali value count se access kr skte hain
    //setcount mein jo value pass krenge voh yeh var ki set kr dega
    let [count,setCount] = useState(0);
    let handleIncrement = ()=> {
        setCount(count+1);
    }
    let handledecrement = ()=> {
        setCount(count-1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick ={handleIncrement}>+</button>
            <button onClick = {handledecrement}>-</button>
        </div>
    )
}

export default Counter
