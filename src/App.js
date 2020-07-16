// import React from "react"
// import ReactDOM from "react-dom"
// import './App.css';

// import MyInfo from "./components/MyInfo"

// ReactDOM.render(
//     <MyInfo />,
//     document.getElementById("root")
// )

// // export default App;

import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

function App() { 
    return (
    // Need some kind of JSX element here
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App