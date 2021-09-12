import React, { useState } from 'react'

export default function TaskInput(props) {

    const [inputVal, setInputVal] = useState('')

    const handleInput = (e) => setInputVal(e.target.value)

    const isValidInput = () => inputVal.length > 0 ? true : false


    const buttonHandler = () => {
        if (isValidInput()) {
            props.addTask(inputVal)
            setInputVal('')
        } else {
            alert('input not valid')
        }

    }

    return (
        <div id="inputContainer" className="flex" >
            <div id="inputWrapper" className="w-60">
                <label htmlFor="taskInput"></label>
                <input
                    placeholder="Enter task"
                    style={{ border: '1px solid black', width: '100%' }}
                    onChange={e => setInputVal(e.target.value)}
                    value={inputVal}
                    type="text"
                    name=""
                    id="taskInput" />
            </div>
            <div id="addBtn" className="bg-blue-400 w-20">
                <button onClick={buttonHandler} className=" w-10 text-white" >+</button>
            </div>
        </div>
    )
}
