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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        // different format when using state
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

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