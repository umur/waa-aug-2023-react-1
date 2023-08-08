import { useState } from 'react';

export default function CreateAddress() {
    let [addressState, setAddressState] = useState({
        id: 'default',
        street: 'default',
        zip: 'default',
        city: 'default'
    })
    const onChanged = (e) => {
        setAddressState({ ...addressState, [e.target.name]: e.target.value });
    }

    const createAddress = () => {
        console.log("id: " + addressState.id + ", street: " + addressState.street);
    }

    return (
        <div>
            id: <input
                type='text'
                value={addressState.id}
                onChange={onChanged}
                name='id'
            />
            Street: <input
                type='text'
                value={addressState.street}
                onChange={onChanged}
                name='street'
            />
            Zipc: <input
                type='text'
                value={addressState.zip}
                onChange={onChanged}
                name='zip'
            />
            City: <input
                type='text'
                value={addressState.city}
                onChange={onChanged}
                name='city'
            />
          

            <button
                type='submit'
                onClick={createAddress}
            >
                Create Address</button>
        </div>
    );
}