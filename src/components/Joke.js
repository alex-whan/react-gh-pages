import React from "react"

// if anything in JSX evaluates to null/undefined, it just won't display it

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "purple"}}>{props.question ? 'Answer:' : ''} {props.punchLine}</h3>  
        </div>
    )
}

export default Joke