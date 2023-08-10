import React from 'react';

const Address = ({ street, zip, city }) => (
    <div>
        <p>Street: {street}</p>
        <p>ZIP: {zip}</p>
        <p>City: {city}</p>
    </div>
);

export default Address;