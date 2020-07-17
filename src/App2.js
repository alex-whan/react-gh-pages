import React from "react"
import Header from "./components/Header"
import MyList from "./components/MyList"

// function App2() {
//     return (
//         <div>
//             <Header />
//             <MyList />
//         </div>
        
//     )
// }

// class based component
// Every class-based component needs at least one method - the render() method
// Will return what we have in our functional component

// With CLASS-BASED COMPONENTS when youre using PROPS - you need to make sure to use "this" in them
// i.e.: <h1>{this.props.whatever}</h1>

class App2 extends React.Component {
    render() {
        return (
            // IF you have any code that determines the display logic, they can go inside the render() method before the return
            // i.e. const date = new Date()
            // yourMethodHere() {}
            // const style = this.yourMethod();
            <div>
                <Header />
                <MyList />
            </div>        
        )
    }
}

export default App2