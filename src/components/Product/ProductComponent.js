import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import AddProduct from "./AddProduct"
import EditProduct from "./EditProduct"

const ProductComponent = () => {
    let [products, setProduct] = useState([])
    const [component, setComponent] = useState(null)

    const handleClick = (value, id) => {
        console.log("asdf")
        switch (value) {
            case 'edit': setComponent(<EditProduct id={id} setComponent={setComponent}/>); break;
            case 'add': setComponent(<AddProduct setComponent={setComponent} />); break;
            default: break;
        }
    }

    const handleDelete = useCallback((id) => {
        axios.delete(`http://localhost:8080/products/${id}`)
            .then(res => {
                alert(`Record with id: ${id} deleted!`)
                fetchData();
            })
    }, [])

    const fetchData = () => {
        axios.get('http://localhost:8080/products')
        .then(res => {
            setProduct(res.data);
        })
    }

    useEffect(() => {
        fetchData();
    }, [component, handleDelete]);

    return (
        <>
            <h1>Products</h1>
            <input type="button" value="Add" className="add-btn" onClick={() => handleClick('add')} />
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
                                    <td className="control">
                                        <p onClick={() => handleClick('edit', product.id)}>[Edit]</p>  <p onClick={() => handleDelete(product.id)}>[Delete]</p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {component}
        </>
    )
}

export default ProductComponent;