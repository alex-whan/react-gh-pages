import React from "react"

// props is an object that has properties of that object, each one being the name of a prop you passed in
function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.imgURL}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard
