import React from "react";
import Product from "./components/Product"
import productsData from "./vschoolProducts"
import Header from "./components/Header"
// Note: when you "default export" something - you can call it whatever you want in the "import" statement as long as the file path is correct

function App3() {
    // My original map
    // const productComponents = productsData.map(item => <Product key={item.key} name={item.name} price={item.price} description={item.description} /> )

    // Better map
    // Here, we pass in the entire object as a prop instead of individual props
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)

    return (
        <div>
            <Header/>
            {productComponents}

        </div>
    )
}

export default App3