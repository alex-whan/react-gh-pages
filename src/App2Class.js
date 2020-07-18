import React from "react"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

class App2Class extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        // different format when using state
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)

        return (
            <div>
                <Header/>
                <div className="todo-list">
                    {todoItems}
                </div>
            </div>
        )
    }
}

export default App2Class