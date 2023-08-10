import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function ProductAdd() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);

    async function addProduct( e) {
        e.preventDefault();
        const url="http://localhost:8080/products"
        const data = {
            name,
            price,
            rating
        }

        try {
            const response = await axios.post(url, data);
            navigate('/products')
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className=" mt-5">
            <h2>Add a New Product</h2>
            <form onSubmit={addProduct}>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" className="form-control" placeholder="Enter product name"
                           value={name} onChange={(e => setName(e.target.value))} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" placeholder="Enter product price"
                           value={price} onChange={(e=>setPrice(e.target.value))} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <select className="form-select" onChange={(e=>setRating(e.target.value))} required>
                        <option value={rating}>Select product rating</option>
                        <option value="5">5 stars</option>
                        <option value="4">4 stars</option>
                        <option value="3">3 stars</option>
                        <option value="2">2 stars</option>
                        <option value="1">1 star</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
                <Link to='/products'>
                    <button type="submit" className="btn btn-secondary">Cancel</button>
                </Link>
            </form>
        </div>
    )
}