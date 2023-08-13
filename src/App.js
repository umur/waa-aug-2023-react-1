import logo from './logo.svg';

import './App.css';

import { useState } from 'react';


 

export default function App() {


  const [Item, setItem]= useState({
    id:"",
    name:"",
    type :"",
    quantity: ""

  })

  const onChange =(e)=>{
    e.preventDefault();
   setItem({...Item,  [ e.target.name]: e.target.value})
  }



  const onSubmit =(e)=>{
    const itemWithId ={...item, id:items.length}
    e.preventDefault();
    setItems([...items, itemWithId])

    // console.log("submitted");
  }
  const onDelete=(id)=>{

  }

  const [items, setitem] = useState([

   

    {name : "item1", id: 1, type : "food", quantity : 5},

    {name : "item2", id: 2, type : "Book", quantity : 4},

    {name : "item1", id: 3, type : "Car", quantity : 3},

 

   ]);

  return (

   <div>

    <ItemList items ={items}/>
    <AddItem onSubmit={onSubmit} onChange={onChange} item={item}/>

   </div>

  );
}
