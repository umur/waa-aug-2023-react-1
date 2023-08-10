import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductsTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Make an Axios GET request to fetch product data
        axios.get("http://localhost:8080/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);


    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8080/products/${id}`)
            .then(response => {
                const newProducts = products.filter(product => product.id !== id);
                setProducts(newProducts);
            })
            .catch(error => {
                console.error("Error deleting product:", error);
            });
    };


    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/addProduct/${id}`);
    }

    return (
        <div>
            <h1>Products Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => handleEdit(product.id)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(product.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsTable;
