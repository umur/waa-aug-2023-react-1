import { useState } from 'react';

export default function CreateProduct() {
    let [productState, setProductState] = useState({
        id: 'default',
        name: 'default',
        price: 'default',
        rating: 'default'
    })
    const onChanged = (e) => {
        setProductState({ ...productState, [e.target.name]: e.target.value });
    }

    const createProduct = () => {
        console.log("id: " + productState.id + ", name: " + productState.name);
    }

    return (
        <div>
            id: <input
                type='text'
                value={productState.id}
                onChange={onChanged}
                name='id'
            />
            name: <input
                type='text'
                value={productState.name}
                onChange={onChanged}
                name='name'
            />
            price: <input
                type='text'
                value={productState.price}
                onChange={onChanged}
                name='price'
            />
            rating: <input
                type='text'
                value={productState.rating}
                onChange={onChanged}
                name='rating'
            />

            <button
                type='submit'
                onClick={createProduct}
            >
                Create Product</button>
        </div>
    );
}