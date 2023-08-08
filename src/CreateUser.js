import { useState } from 'react';

export default function CreateUser() {
    let [userState, setUserState] = useState({
        id: 'default',
        email: 'default',
        password: 'default',
        fname: 'default',
        lname: 'default'
    })
    const onChanged = (e) => {
        setUserState({ ...userState, [e.target.name]: e.target.value });
    }

    const createUser = () => {
        console.log("id: " + userState.id + ", email: " + userState.email);
    }

    return (
        <div>
            id: <input
                type='text'
                value={userState.id}
                onChange={onChanged}
                name='id'
            />
            email: <input
                type='text'
                value={userState.email}
                onChange={onChanged}
                name='email'
            />
            Password: <input
                type='text'
                value={userState.password}
                onChange={onChanged}
                name='password'
            />
            Fname: <input
                type='text'
                value={userState.fname}
                onChange={onChanged}
                name='fname'
            />
            Lname: <input
                type='text'
                value={userState.lname}
                onChange={onChanged}
                name='lname'
            />

            <button
                type='submit'
                onClick={createUser}
            >
                Create User</button>
        </div>
    );
}