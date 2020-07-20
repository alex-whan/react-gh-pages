import React, {Component} from "react"
import Conditional from "./components/Conditional"

class App8API extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.dev/api/people/1")
            // resolve a promise with .then()
            .then(response => response.json())
            // Once we receive the data, we need to SAVE it somewhere or else it'll disappear
            // Remember: the way we save data within a component is in its STATE
            .then(data =>
                this.setState({ // We don't care what the prevState was in this case
                    loading: false,
                    character: data
                })
            )
    }

    render() {
        const text = this.state.loading ? <Conditional/> : this.state.character.name;

        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }

}


export default App8API