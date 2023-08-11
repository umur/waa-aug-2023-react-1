import axios from "axios"
import { useEffect, useState } from "react"

const UserComponent = () => {
    let [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/users')
        .then(res=>{
            setUsers(res.data)
        })
    }, [])

    return (
        <>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserComponent;