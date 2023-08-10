import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function AddProduct(){


let [products, setProducts] = useState({
    name: "Samsung Galaxy S21" || products.name,
    price: 1000 || products.price,
    category: "Select Category"
});
const options = [
    { value: 'default', label: 'Select a category' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Clothing', label: 'Clothing' },
    { value: 'Books', label: 'Books' },
    { value: 'Home & kitchen', label: 'Home & kitchen' },
    { value: 'Toys', label: 'Toys' }
    ]

const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "category" && value === "default") {
        return;
      }
    setProducts({...products, [e.target.name]: e.target.value})
}
const handleSubmit = async (e)  => {
  e.preventDefault();
  try {
    console.log(products);
    if (id) {
        const response = await axios.put(`http://localhost:8080/products/${id}`, products);
        console.log(response);
    } else {
        const response = await axios.post('http://localhost:8080/products', products);
        console.log(response);
    }
} catch (error) {
    console.error(error);
}
};



const {id} = useParams();

useEffect(() => {
  axios.get(`http://localhost:8080/products/${id}`)
  .then(response => {
      setProducts(response.data);
      console.log(setProducts(response.data));
  }
  ) 
  .catch(error => {
      console.error("Error fetching products:", error);
})
}, [id]);

    
  return (
    <div className="AddProduct">
      <h1>{id ? "Edit Product" : "Add Product"}</h1>
      Product Name:<input type="text" 
                           placeholder="Product Name" 
                           name="name"
                           onChange={onChange}/>
      Product Price:<input type="text" 
                            placeholder="Product Price" 
                            name="price"
                            onChange={onChange}/>
     Category: <select 
                        name="category"
                        onChange={onChange}
                        value={products.category} >
        {options.map((option) => (
            <option key={option.id} value={option.value}>{option.label}</option>
        ))}
      </select>
      <button style={{backgroundColor:'green', color:'white'}} onClick={handleSubmit}>{id ? "Save Changes" : "Add Product"}</button>
    </div>
  );
}

export default AddProduct;