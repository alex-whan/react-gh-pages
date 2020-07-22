import React, { useState, useEffect } from "react"

function App10Hooks() {
    // can also do React.useState() but the below is much more common
    // whatever you put inside the useState() function is going to be the value of your initial state
    // i.e.: const value = useState("Yes"); would be the same as our Class-based state initialization below
    // Will send back an array and a function, and the first item in the array will be the initialized value
    const [ answer ] = useState("Yes");
    console.log(answer);

    // We can use OBJECT DESTRUCTURING to pull out AS VARIABLES the properties of the object, like so:
    // instead of
        // const person = {
        //     name: "Joe",
        //     age: 4 0 
        // }
    // you can do
        // const { name, age } = person;

    // HOWEVER: Since useState() returns an ARRAY rather than an object, we can't use object destructuring - we need to use ARRAY DESTRUCTURING instead:
    // const [ value ] = useState("Yes")
    // Same as regular state - but because it's an array you can technically name it whatever you want - like this (with array destructuring, you can call it whatever you want - and this is very helpful):
    // const [ answer ] = useState("Yes")

    // useState array: first value = will be the thing you're saving in state; second value = function

    return (
        <div>
            <h1>Is state important to know? {answer}! </h1>
        </div>
    )

}

export default App10Hooks


// CLASS-BASED VERSION:

// import React from "react"

// class App10Hooks extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }
