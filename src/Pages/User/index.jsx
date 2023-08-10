import React, {useEffect} from 'react';
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import {useUserLogic} from "./logic";


const User = () => {

    const {
        fetchUsers, loading, handleSave, firstName, lastName, email,
        password, setFirstName, setLastName, setEmail, setPassword, editing, data, handleEdit, handleDelete } = useUserLogic();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return (<h1>Loading....</h1>);
    }
    return (
        <div>
            <h1>Users CRUD</h1>
            <div>

                <UserForm
                    onSubmit={handleSave}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    password={password}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    editing={editing}
                />
                <UserTable data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </div>
        </div>
    );
};

export default User;
