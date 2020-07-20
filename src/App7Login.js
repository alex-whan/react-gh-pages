import React, {Component} from "react"
import ConditionalButton from "./components/ConditionalButton"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

// Either: {Component} above and Component only below
// OR: No {Component} above and React.Component below
class App7Login extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.logIn = this.logIn.bind(this);
    }

    logIn() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.isLoggedIn !== this.state.isLoggedIn) {
            console.log('logged in or out!')
        }
    }

    render() {
        let wordDisplay;
        this.state.isLoggedIn ? wordDisplay = "in" : wordDisplay = "out";

        if(this.state.isLoggedIn) {
            return (
                <div>
                    <h1>You are logged {wordDisplay}!</h1>
                    <button onClick={this.logIn}>Log Out</button>
                </div>
            )
        }
        
        return (
            <div>
                <h1>You are logged {wordDisplay}!</h1>
                <button onClick={this.logIn}>Log In</button>
            </div>
        )
    }
}

export default App7Login