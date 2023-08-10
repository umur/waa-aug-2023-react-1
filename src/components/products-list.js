import {useEffect, useState} from "react";
import axios from "axios";
import Product from "./product";

export default function ProductsList() {
    let initialState = [];
    let [productsState, setProductsState] = useState(initialState);

    const getProducts = async () => {
        const result = await axios.get("http://localhost:8080/products");
        setProductsState(result.data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul className="list-group">
            {productsState.map(p => {
                return (
                    <Product id ={p.id} name={p.name} price={p.price} rating={p.rating} getProducts={getProducts}/>
                )
            })}
            </ul>
        </div>
    )
}