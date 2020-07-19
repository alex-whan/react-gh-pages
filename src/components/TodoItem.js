import React from "react"

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} 
      // empty function that calls props.handleChange and passes the ID to it (ID of the item that was clicked)
      onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem