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
import Joke from "./components/Joke"
import jokesData from "./jokesData"

function App() { 

    // Now we have an array of components - which we can put directly into JSX
    // Can do an implicit return on one line with the .map
    // Remember: .map() returns an array
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
   
    return (
        <div>
            <Header />
            
            <ContactCard 
                name="Alex" 
                imgURL="#"
                phone="(555) 555-5555"
                email="alex@alex.com"
            />
            <MainContent />
            <div>
                <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
                
                <Joke 
                    question="What's the best thing about Switzerland?" 
                    punchLine="I don't know, but the flag is a big plus!"
                />
                
                <Joke 
                    question="Did you hear about the mathematician who's afraid of negative numbers?" 
                    punchLine="He'll stop at nothing to avoid them!"
                />
                
                <Joke 
                    question="Hear about the new restaurant called Karma?" 
                    punchLine="There’s no menu: You get what you deserve."
                />
                
                <Joke 
                    question="Did you hear about the actor who fell through the floorboards?" 
                    punchLine="He was just going through a stage."
                />
                
                <Joke 
                    question="Did you hear about the claustrophobic astronaut?" 
                    punchLine="He just needed a little space."
                />
            </div>
            
            
            <Footer />
        </div>
    )
}

export default App