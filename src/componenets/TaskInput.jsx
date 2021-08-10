import React, { useState } from 'react'

export default function TaskInput(props) {

    const [inputVal, setInputVal] = useState('')

    const handleInput = (e) => setInputVal(e.target.value) 

    const isValidInput = () => inputVal.length > 0 ? true : false
    

    const buttonHandler = () => {
        if(isValidInput()){
            props.addTask(inputVal) 
            setInputVal('')
        }else{
            alert('input not valid')
        }

    } 

    return (
        <div>
            <div id="inputWrapper">

            <label htmlFor="taskInput"> Enter Task</label>
            <input style={{border:'1px solid black'}} onChange={handleInput} value={inputVal} type="text" name="" id="taskInput" />
            </div>
            <div id="addBtn">
                <button onClick={buttonHandler} >+</button>
            </div>
        </div>
    )
}
