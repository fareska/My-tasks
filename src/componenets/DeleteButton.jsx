import React from 'react'

const styles = {
    button: {
        // width:'200px',
        // border: '2px solid black'
    }
}

export default function DeleteButton(props) {

    return (
        <div id="buttonsContainer" className="flex" >
            <button
                style={styles.button}
                className="bg-red-400 w-40 hover:bg-red-600 rounded p-1 m-2 ml-0"
                name="deleteAll"
                onClick={(e) => props.deleteTasks(e.target.name)}
            >
                Delete All
            </button>
            <button
                style={styles.button}
                className="bg-red-400 w-40 hover:bg-red-600 rounded m-2"
                name="deleteCompleted"
                onClick={(e) => props.deleteTasks(e.target.name)}
            >
                Delete Completed
            </button>
        </div>
    )
}
