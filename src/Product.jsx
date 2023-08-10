import React from 'react'

const Product =(props)=>{
    return(
        <div onClick={()=>{
            props.setSelectedProduct(props.id)
        }}>
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
        </div>
    )
}

export default Product;