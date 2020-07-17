import React from "react"

function Product(props) {
    return (
        <div className="product-listing">
            <h2>{props.name}</h2>
            <h3>${props.price}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Product