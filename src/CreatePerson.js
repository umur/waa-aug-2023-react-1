import { useState } from 'react';
export default function CreatePerson() {
    let [personState, setPersonState] = useState({
        fname: 'default',
        lname: 'default'
    })

    const onChanged = (e) => {
        setPersonState({ ...personState, [e.target.name]: e.target.value });
        console.log(useState.fname + " " + useState.lname);
    }


    return (
        <div>
            Firstname: <input 
                type="text"
                value={personState.fname }
                onChange={onChanged}
                name='fname'
            />
            Lastname: <input
                type="text"
                value={personState.lname }
                onChange={onChanged}
                name='lname'
            />
        </div>
    );
}