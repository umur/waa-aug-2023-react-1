import React from "react";
import Item from "../../src/Item";
import ItemList from "../../src/ItemList";


const AddItem=({onSubmit,onChange, item})=>{
    const {name, type, quantity}=item;


    return(
            <form onSubmit={onSubmit}>
                <input type ="name" placeholder="name" onChange={onChange} value={name}/>
                 <input type ="type" placeholder="type" onChange={onChange} value={type}/>
                 <input type ="qauntity" placeholder="qauntity" onChange={onChange} value={quantity}/>

                 <button type="submit"> submit</button>





    

            </form>



    )
}
export default AddItem
