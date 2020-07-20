import React, {Component} from "react"

class App5 extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "hello",
                "sup doe!",
                "you should be thankful!"
            ]
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 &&
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App5
