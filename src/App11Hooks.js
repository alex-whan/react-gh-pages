import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App11Hooks() {
    const [count, setCount] = useState(0);
    const [answer, setAnswer] = useState("Yes");
    const [color, setColor] = useState("");

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    // include a new effect to our component
    // gives us a callback function (the whole first part of useEffect)
    // in useEffect, the callback function is where we can set up our effect

    // setColor will give us an infinite loop of constantly updating color - why?
    // componentDidUpdate - useEffect replaces this, so every single time our function returns (aka every time the component renders), it's calling this useEffect function, and that function is then setting the State of the color, which then is in turn causing a re-render, and then the cycle triggers again endlessly.

    // Remember: in componentDidUpdate, we had the option to grab the previous PROPS and the previous STATE and compare them to the current props/state in order to manually decide if something should run.
    // However, it's SUCH a common USE CASE that useEffect has a super easy way to determine whether or not useEffect should apply:
    // First parameter = callback function
    // Second parameter = array
    //i.e.
    // useEffect((),[]);
     // useEffect((callback),[variable to look for change on]);

    // Inside this array, we can specify what variable you want to watch for changes in - and if this variable changes, run the effect again

    // The variable we want it to run the effect on/change the color for is when the COUNT variable is changed
    // The array means you can potentially have a long list (multiple) of variables that you want it to be watching for changes on

    // This useEffect() will run whenever the component renders, and we can specify when we want it to only render for a specific variables

    // However, it's very common to ONLY want to run certain code when a component mounts for the first time (think componentDidMount)
    // this is also simple in useEffect()
    // To only do something (like set the color) the very FIRST time the component mounted, you can leave an empty array [] as the second param, and this tells it to run only on mounting - although for our example we could just have it initialize in the first place with a random color

    useEffect(()=> {
        // this whole first part is a callback function
        setColor(randomcolor())
    }, [count])

    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment!</button>
            <button onClick={decrement}>Decrement!</button>
        </div>
    )
}

export default App11Hooks