import React from "react"

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "lightgrey",
    textDecoration: "line-through"
  }

  return (
    // "checked" property basically says - if property "completed" is true, check it, if false, unchecked
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} 
      // empty function that calls props.handleChange and passes the ID to it (ID of the item that was clicked)
      // Calls onChange when clicked
      onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </div>
  )
}

export default TodoItem