import React from "react"
import ReactDOM from "react-dom"

// Always need to use ReactDOM.render() to get things to show up on page
// First param: What we want to render
// Second param: Where to render it
// "App" component is going to be the ENTRY POINT into our entire application
// In order for this not to fail, we need to import App

import App from "./App"
import App2 from "./App2"
import App3 from "./App3"

// entry point to our app
// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App2 />, document.getElementById("root"));
// ReactDOM.render(<App3 />, document.getElementById("root"));