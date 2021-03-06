import React from "react"
import randomcolor from "randomcolor"

class App3Class extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.handleIncrementClick = this.handleIncrementClick.bind(this)
        this.handleDecrementClick = this.handleDecrementClick.bind(this)

    }

    // We're creating a version that returns an object literal and preserves the previous version of State
    handleIncrementClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleDecrementClick() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }

    render(){
        return (
            <div>
                <div>
                    <h1 style-={{color: this.state.color}}>{this.state.count}</h1>
                    <button onClick={this.handleIncrementClick}>Increment!</button>
                    <button onClick={this.handleDecrementClick}>Decrement!</button>
                </div>
            </div>
        )
    }
}

export default App3Class 