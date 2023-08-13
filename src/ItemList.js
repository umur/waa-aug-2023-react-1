import React from "react"
import Item from "./Item";

const ItemList =({items})=>{

    return(
        <div>
{
    items.map(d=>(
        <div>
             <table>
                <thread>
                    <th> name</th>
                    <th> type</th>
                    <th> quantity</th>
                  
                </thread>
                <tbody>
                    {items.map(data=>{
                       return(
                        <Item data = {data}> </Item>
                       )}

                    )}
                </tbody>
             </table>

            </div>


    ))
}

        </div>

    )
}
export default ItemList;