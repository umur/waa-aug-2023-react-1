import axios from "axios";
import { useEffect, useState } from "react";

const EditProduct = ({ id, setComponent }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const handleSave = () => {
        const new_product = {
            name,
            price,
            rating
        }
        axios.put(`http://localhost:8080/products/${id}`, new_product)
            .then(res => {
                setComponent(null)
            })
    }

    const fetchData = () => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then(res => {
                setName(res.data.name);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            Name <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            Price <input type="text" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <br />
            Rating <input type="text" name='rating' value={rating} onChange={(e) => setRating(e.target.value)} />
            <br />
            <input type='button' value="Save" onClick={handleSave} />
        </div>
    )
}

export default EditProduct;