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
import MyList from "./components/MyList"
import ContactCard from "./components/ContactCard"

function App() { 
    return (
    // Need some kind of JSX element here
        <div>
            <Header />
            
            <ContactCard 
                name="Alex" 
                imgURL="#"
                phone="(555) 555-5555"
                email="alex@alex.com"
            />
            <MainContent />
            <MyList />
            <Footer />
        </div>
    )
}

export default App