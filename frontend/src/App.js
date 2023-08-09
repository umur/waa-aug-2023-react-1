import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/user')
      .then(res => {
        setUsers(res.data);
      })
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

