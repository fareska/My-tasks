import React from 'react'

const styles = {
    button:{
        width:'200px',
        border: '2px solid black'
    }
}

export default function DeleteButton(props) {

    const handleDeleteClick = (e)=> props.deleteTasks(e.target.name);

    return (
        <div>
            <button style={styles.button} name="deleteAll" onClick={handleDeleteClick} >Delete All</button>
            <button style={styles.button} name="deleteCompleted" onClick={handleDeleteClick} >Delete Completed</button>
        </div>
    )
}
