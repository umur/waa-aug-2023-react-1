import { useState } from 'react';

export default function CreateCategory() {
    let [categoryState, setCategoryState] = useState({
        id: 'default',
        name: 'default'
    })
    const onChanged = (e) => {
        setCategoryState({ ...categoryState, [e.target.name]: e.target.value });
    }

    const createCategory = () => {
        console.log("id: " + categoryState.id + ", name: " + categoryState.name);
    }

    return (
        <div>
            id: <input
                type='text'
                value={categoryState.id}
                onChange={onChanged}
                name='id'
            />
            name: <input
                type='text'
                value={categoryState.name}
                onChange={onChanged}
                name='name'
            />
            <button
                type='submit'
                onClick={createCategory}

            >Create Category</button>
        </div>
    );
}