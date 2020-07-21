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
        // let promiseArray = [];
        let url = "https://swapi.dev/api/people/1";
        this.setState({loading: true})
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // resolve a promise with .then()
            // Once we receive the data, we need to SAVE it somewhere or else it'll disappear
            // Remember: the way we save data within a component is in its STATE
            this.setState({ // We don't care what the prevState was in this case
                loading: false,
                character: data
            })
        })
    }

    render() {
        const personInfo = this.state.loading ? <Conditional/> : <li>{this.state.character.name}, Born: {this.state.character.birth_year}</li>;
        return (
            <div>
                <ul>
                    <li>{personInfo}</li>
                    {/* <li>{this.state.character.homeworld}</li> */}
                </ul>
            </div>
        )

    }
}


export default App8API