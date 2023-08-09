import { useState } from 'react';
import axios from 'axios';

function UserForm() {

  const [user, setUser] = useState({
    name: '', 
    email: ''
  });

  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios.post('/user', user)
      .then(res => {
        // redirect on success
      })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input 
        name="name" 
        value={user.name}
        onChange={onInputChange} 
      />

      <input
        name="email"
        value={user.email}
        onChange={onInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );

}

export default UserForm;