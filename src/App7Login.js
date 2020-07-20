import React, {Component} from "react"
import ConditionalButton from "./components/ConditionalButton"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
    // class-based component
    // constructor method
2. Have state keep track of whether the user is logged in or not
    // isLoggedIn: Boolean (true or false)
3. Add a button that logs the user in/out
    // event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
        // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
    // Conditional Rendering
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

    // need to know what the previous state was in this case
    // really good/concise way to flip a Boolean to whatever the opposite is
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
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "in" : "out";
        return (
                <div>
                    <h1>You are logged {displayText}!</h1>
                    <button onClick={this.logIn}>{buttonText}</button>
                </div>
        )
    }
}

export default App7Login