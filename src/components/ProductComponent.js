import { useState } from "react"

const ProductComponent = () => {
    let [products, setProduct] = useState([
        { id: 1, name: 'p1', price: 3.48, rating: 5 },
        { id: 2, name: 'p2', price: 3.48, rating: 5 },
        { id: 3, name: 'p3', price: 3.48, rating: 5 },
        { id: 4, name: 'p4', price: 3.48, rating: 5 }
    ])

    return (
        <>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.rating}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductComponent;