import React from "react"
import ReactDOM from "react-dom"

// Always need to use ReactDOM.render() to get things to show up on page
// First param: What we want to render
// Second param: Where to render it
// "App" component is going to be the ENTRY POINT into our entire application
// In order for this not to fail, we need to import App

import App from "./App"
import App2 from "./App2"
import App2Class from "./App2Class"
import App3 from "./App3"
import App3Class from "./App3Class"
import App4 from "./App4"
import App4Class from "./App4Class"
import App5 from "./App5"
import App6 from "./App6"
import App7Login from "./App7Login"
import App8API from "./App8API"

// entry point to our app
// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<App2 />, document.getElementById("root"));
// ReactDOM.render(<App2Class />, document.getElementById("root"));
// ReactDOM.render(<App3Class />, document.getElementById("root"));
// ReactDOM.render(<App3 />, document.getElementById("root"));
// ReactDOM.render(<App4 />, document.getElementById("root"));
// ReactDOM.render(<App4Class />, document.getElementById("root"));
// ReactDOM.render(<App5 />, document.getElementById("root"));
// ReactDOM.render(<App6 />, document.getElementById("root"));
// ReactDOM.render(<App7Login />, document.getElementById("root"));
ReactDOM.render(<App8API />, document.getElementById("root"));