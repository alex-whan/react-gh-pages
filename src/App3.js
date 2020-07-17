import React from "react";
import Product from "./components/Product"
import productsData from "./vschoolProducts"

function App3() {
    const productComponents = productsData.map(item => <Product key={item.key} name={item.name} price={item.price} description={item.description} /> )

    return (
        <div>
            {productComponents}

        </div>
    )
}

export default App3