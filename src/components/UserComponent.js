import { useState } from "react"

const UserComponent = () => {
    let [users, setUsers] = useState([
        { id: 1, email: 'user1@miu.com', password: 'pass1', firstname: 'John', lastname: 'Doe' },
        { id: 2, email: 'user2@miu.com', password: 'pass2', firstname: 'James', lastname: 'Doe' },
        { id: 3, email: 'user3@miu.com', password: 'pass3', firstname: 'Peter', lastname: 'Doe' },
        { id: 4, email: 'user4@miu.com', password: 'pass4', firstname: 'Jacob', lastname: 'Doe' }
    ])

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
                                <tr>
                                    <td>{user.firstname} {user.lastname}</td>
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