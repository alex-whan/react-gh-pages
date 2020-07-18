import React from "react"

class App4 extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // make a variable to hold the logged in/out status
        let wordDisplay; // initializes variable without giving it a value
        if (this.state.isLoggedIn === true){ // can get rid of Boolean since it's always True or False (will be truthy)
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }

        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default App4