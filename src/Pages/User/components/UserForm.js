import React, { useState } from 'react';

const UserForm = ({ onSubmit, firstName, lastName, email, password, setFirstName, setLastName, setEmail, setPassword, editing }) => {
    return (
        <div>
            <h2>{editing ? 'Edit user' : 'Add user'}</h2>
            <div>
                <label>First Name: </label>
                <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>

            <div>
                <label>Last Name: </label>
                <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label>Password: </label>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <button onClick={onSubmit}>
                {editing ? 'Save Changes' : 'Add User'}
            </button>
        </div>
    );
};

export default UserForm;
