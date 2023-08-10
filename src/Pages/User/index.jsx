import React, {useEffect, useState} from 'react';
import {readAll, read, create, update, remove} from "../../Api/api";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import {userLogic, useUserLogic} from "./logic";


const User = () => {

    const {fetchUsers, loading,
        handleSave,
        firstName,
        lastName,
        email,
        password,
        setFirstName,
        setLastName,
        setEmail,
        setPassword,
        editing, data, handleEdit, handleDelete } = useUserLogic();
    // const [data, setData] = useState([]);
    // const [currentId, setCurrentId] = useState(null);
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [editing, setEditing] = useState(false);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     fetchUsers();
    // }, []);
    //
    //
    // const fetchUsers = async () => {
    //     try {
    //         const response = await readAll('users');
    //         setData(response.data);
    //         setLoading(false);
    //     } catch (error) {
    //         setError(error.message);
    //         setLoading(false);
    //     }
    // };
    //
    // const handleSave = async () => {
    //     const userData = {firstName, lastName, email, password};
    //     try {
    //         let response;
    //         if (editing) {
    //             response = await update('users', currentId ,userData);
    //         } else {
    //             response = await create('users', userData);
    //         }
    //         setData(response.data);
    //         setLoading(true);
    //         fetchUsers();
    //     } catch (error) {
    //         setError(error.message);
    //         setLoading(false);
    //     }
    //
    //
    //     setFirstName('');
    //     setLastName('');
    //     setEmail('');
    //     setPassword('');
    //     setCurrentId(null);
    //     setEditing(false);
    // };
    //
    // const handleEdit = id => {
    //     const userToEdit = data.find(user => user.id === id);
    //     if (userToEdit) {
    //         setFirstName(userToEdit.firstName);
    //         setLastName(userToEdit.lastName);
    //         setEmail(userToEdit.email);
    //         setPassword(userToEdit.password);
    //         setCurrentId(id);
    //         setEditing(true);
    //     }
    // };
    //
    // const handleDelete = async (id) => {
    //     try {
    //         const response = await remove('users', id);
    //         setData(response.data);
    //         setLoading(true);
    //         fetchUsers();
    //     } catch (error) {
    //         setError(error.message);
    //         setLoading(false);
    //     }
    // };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return (<h1>Loading....</h1>);
    }
    return (
        <div>
            <h1>Users</h1>
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
