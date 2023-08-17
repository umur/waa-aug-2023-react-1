import {useState} from 'react'
import ProductList from './ProductList';
import AddProduct from './AddProduct';

function App() {
  const [product,setProduct] = useState({
    id:"",
    name:"",
    type:"",
    quantity:""
  })
  const onChange = (e)=>{
    e.preventDefault();
    setProduct({...product,[e.target.name]:e.target.value})
  }
  const onSubmit = (e)=>{
    const productWithId ={...product,id:products.length}
    e.preventDefault();
    setProducts([...products,productWithId])
  }
  const handleClick = (id)=>{
    const newProducts = products.filter(data=>data.id!=id);
    setProducts(newProducts);
  }
  const [products,setProducts] = useState(
    [
      {
        id:1,name:"product1",type:"Food",quantity:5
      },
      {
        id:2,name:"product2",type:"Book",quantity:3
      },
      {
        id:3,name:"product3",type:"Car",quantity:4
      },
      {
        id:4,name:"product4",type:"Device",quantity:2
      },
    ]
  )
  return (
    <div>
     <ProductList products={products} handleClick={handleClick}/>
     <AddProduct onSubmit={onSubmit} product={product} onChange={onChange}/>
    </div>
  );
}

export default App;
