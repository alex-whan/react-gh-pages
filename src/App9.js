import React, {Component} from "react"

class App9 extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            personalNote: "Enter a personal note here!",
            isFriendly: false,
            gender: "",
            favVegetable: "mushroom"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        // DESTRUCTURE our variables from event.target - useful to make a "copy" of these before setting state
        const {name, value, type, checked} = event.target;
        // Ternary checks to see if it's a checkbox (logic is slightly different) - all other input types can use the same handler (on right side of Ternary)
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                />

                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />

                <textarea
                    type="text"
                    value={this.state.personalNote}
                    name="personalNote"
                    onChange={this.handleChange}
                />

                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        // Tells us under which condition the box is checked (male = true? -> checked)
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                <label>Favorite Color:</label>
                <select 
                    value={this.state.favVegetable}
                    onChange={this.handleChange}
                    name="favVegetable"
                >
                    <option value="mushroom">Mushroom</option>
                    <option value="broccoli">Broccoli</option>
                    <option value="onion">Onion</option>
                    <option value="zucchini">Zucchini</option>
                    <option value="carrot">Carrot</option>
                </select>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are: {this.state.gender}</h2>
                <h2>Your favorite vegetable is: {this.state.favVegetable}</h2>
                <h3>My personal note for the world is: "{this.state.personalNote}"</h3>
                <button>Submit!</button>
            </form>
        )
    }
}

export default App9