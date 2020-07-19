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
            // Remember: You don't want to directly modify State. So, what we do here is -  Looking at previous state, and creating a new array that almost perfectly mirrors what it used to be, except one of the items (which has the same ID as the function received from the onChange handler) is flipping from true to false or false to true (and then that new array is returned and passed to the state as a property)
            // Brand new array that will replace our old todosData above and get re-rendered
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    // creates a whole new object below with the spread operator - new object is the same EXCEPT it flips true->false or false->true in the "completed" property
                    // ... = spread operator (gives us all the properties of the todo)
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
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

// ... = object spread notation
// saying here: give me all of the properties of this todo item

export default App2Class