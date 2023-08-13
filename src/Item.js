import React from "react"

const Item =({data})=>


<tr>
<td>{data.name}</td>
<td>{data.type}</td>
<td>{data.quantity}</td>
</tr>
export default Item;