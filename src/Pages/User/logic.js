import {useState} from "react";
import {create, readAll, remove, update} from "../../Api/api";

export function useUserLogic () {
    const [data, setData] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await readAll('users');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const handleSave = async () => {
        const userData = {firstName, lastName, email, password};
        try {
            let response;
            if (editing) {
                response = await update('users', currentId, userData);
            } else {
                response = await create('users', userData);
            }
            setData(response.data);
            setLoading(true);
            fetchUsers();
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }


        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setCurrentId(null);
        setEditing(false);
    };

    const handleEdit = id => {
        const userToEdit = data.find(user => user.id === id);
        if (userToEdit) {
            setFirstName(userToEdit.firstName);
            setLastName(userToEdit.lastName);
            setEmail(userToEdit.email);
            setPassword(userToEdit.password);
            setCurrentId(id);
            setEditing(true);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await remove('users', id);
            setData(response.data);
            setLoading(true);
            fetchUsers();
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return {
        data,
        setData,
        currentId,
        setCurrentId,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        editing,
        setEditing,
        loading,
        setLoading,
        error,
        setError,
        fetchUsers,
        handleSave,
        handleEdit,
        handleDelete
    }
}
