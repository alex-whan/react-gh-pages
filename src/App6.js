import React, {Component} from "react"
import Conditional from "./components/Conditional"

class App6 extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                {
                    !this.state.isLoading ?
                    <h1>My cool loaded text!</h1> :
                    <Conditional />
                }
            </div>
        )
    }
}

export default App6