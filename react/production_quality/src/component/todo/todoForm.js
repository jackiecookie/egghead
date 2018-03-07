import React from 'react'


function TodoForm(props) {
    return (
         <form>
            <input type="text" onChange={props.handleInputChange} defaultValue = {props.currentTodo}/>
          </form>
    )
}

export default TodoForm;