import React from 'react'
import Product from './Product'
const ProductList = (props)=>{ 
    const {products,handleClick} = props;
    return(
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Quantity</th>
                </thead>
                <tbody>
                {products.map(data=>(
                   <Product data={data} handleClick={handleClick}/>
          ))}
                </tbody>
            </table>

        </div>
    )
}
export default ProductList;
