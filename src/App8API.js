import React, { useState, useEffect } from "react"
import Conditional from "./components/Conditional"

function App8API() {
    let url = "https://swapi.dev/api/people";
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log('THIS IS MY DAT BOD: ', data.results);
            setPeople(data.results);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, []) // [] means it will fetch only once - on componentDidMount

    return (
        <div>
            <ul>
                {
                loading ? <Conditional /> : people.map(person => <li key={person.name}>{person.name}</li>)
                }
            </ul>
        </div>
    )
};

export default App8API

// function App8API() {

//     let url = "https://swapi.dev/api/people/1";

//     const useFetch = url => {
//         const [data, setData] = useState(null);
//         const [loading, setLoading] = useState(true);

//         useEffect(async () => {
//             const response = await fetch(url);
//             const data = await response.json();
//             const [item] = data.results;
//             setData(item);
//             setLoading(false);
//         }, [])

//        return { data, loading }; 
//     };

//     return (
//         <div>
//             <ul>
//                 <li>{loading ? <Conditional /> : person.name}</li>
//             </ul>
//         </div>
//     )
// }

// this.setState({loading: true})
//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             // resolve a promise with .then()
//             // Once we receive the data, we need to SAVE it somewhere or else it'll disappear
//             // Remember: the way we save data within a component is in its STATE
//             this.setState({ // We don't care what the prevState was in this case
//                 loading: false,
//                 character: data
//             })
//         })
//     }


// class App8API extends Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }

//     componentDidMount() {
//         // let promiseArray = [];
//         let url = "https://swapi.dev/api/people/1";
//         this.setState({loading: true})
//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             // resolve a promise with .then()
//             // Once we receive the data, we need to SAVE it somewhere or else it'll disappear
//             // Remember: the way we save data within a component is in its STATE
//             this.setState({ // We don't care what the prevState was in this case
//                 loading: false,
//                 character: data
//             })
//         })
//     }

//     render() {
//         const personInfo = this.state.loading ? <Conditional/> : <li>{this.state.character.name}, Born: {this.state.character.birth_year}</li>;
//         return (
//             <div>
//                 <ul>
//                     <li>{personInfo}</li>
//                     {/* <li>{this.state.character.homeworld}</li> */}
//                 </ul>
//             </div>
//         )

//     }
// }

// export default App8API