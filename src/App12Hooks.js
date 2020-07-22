import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

// So far in this app, all the SIDE EFFECTS we introduced (setting new state, etc) is all cleaned up when component unmounted (since it's just logic we're dealing with)

// However, not all side effects we introduce will be cleaned up automatically.
// Common examples:
    // When you create a manual event listener on a diff. part of your document using something like document.addEventListener
    // If you set up some kind of socket subscription that watches for changes in real time (like a real time update/chat client or something)
    // Could cause memory leaks, residual jobs from leaving them behind

// for example, if you use setInterval (something you might use to make a stopwatch) - creates a recurring job for JS to run.
// However, if you create that job in a component and then unmount it, the job will actually continue to run in the background
// in a Class component, this is where we'd use the lifecycle method componentWillUnmount - to clean up our "messes" that won't automatically be cleaned up for us

// How do we do this with useEffect?

// setInterval is a native JS function (Can just call it)
    // Need to provide some function plus the number of miliseconds until the next call (setInterval(()=> console.log('Interval!')), 1000);

// Could use setInterval function inside useEffect to tell it to change the count (run the setCount function) at each interval
// However, this will introduce a bug that will keep adding interval counters over and over again infinitely - because in our useEffect we're calling setCount, but our useEffect is also going to run every time Count changes (aka adding ANOTHER new setInterval) and start adding like crazy/exponentially:
// useEffect(() => {
//     // setInterval(() => {
//     //     setCount(prevCount => prevCount + 1)
//     // }, 1000)
//     setColor(randomcolor())
// }, [count])

// We can call useEffect more than once, and this example might be a good time to do it.
// If I want something to specifically only run one time, we can use the [] empty array trick to act like a componentWillUnmount - this way the setInterval will only get set up ONCE, and the setCount function will run once each interval instead of having multiple iterations of the same interval/counter running at the same time.


// CLEANING UP SIDE EFFECTS
// With setInterval, we can end an interval by grabbing an ID that's return to us by setInterval (to then put into another function called clearInterval)

// The way we can use useEffect() to act like componentWillUnmount() is by RETURNING something from it's body - a FUNCTION.
// This function is going to be our "cleanup function"
// Under the hood, when React calls useEffect and that call returns a function, it stores a function, and right when a Component is about to unmount, it RUNS that function so it can do any kind of cleanup it needs to do.
// In our case, the function we're giving to React to run for cleanup will simply be "clearInterval(intervalId" - with the intervalId passed to it.

// To Summarize, useEffect is a really nice way to look at component lifecycle methods and think of it as a way to introduce side effects into your component:
    // Can be used to replace componentDidMount by putting the empty array [] as second param (only runs once on mounting)
    // Can be used to act in place of componentDidUpdate by adding variables to our array that it's watching for changes on ([count, etc])
    // Can use the returned function from useEffect in order to act like componentWillUnmount to do any kind of "cleanup" we need to do with side effects

// This is how much simpler/cleaner/readable Hooks can make your code

function App12Hooks() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    // Add 1 every 1 second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])


    // Subtract 2 every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount - 2)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [])

    // Change to a new random color when the Count changes
    useEffect(()=> {
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

export default App12Hooks