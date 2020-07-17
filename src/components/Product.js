import React from "react"

function Product(props) {
    return (
        <div className="product-listing">
            <h2>{props.product.name}</h2>
            <h3>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <p>{props.product.description}</p>
        </div>
    )
}

export default Product