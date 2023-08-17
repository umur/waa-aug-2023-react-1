import React from 'react'

const AddProduct=({onSubmit,onChange,product})=>{
    const {name,type,quantity} = product;
    return(
        <form onSubmit={onSubmit}>
            <input name="name" placeholder="Name" onChange={onChange} value={name}/>
            <input name="type" placeholder="Type" onChange={onChange} value={type}/>
            <input name="quantity"placeholder="Quantity" onChange={onChange} value={quantity}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default AddProduct