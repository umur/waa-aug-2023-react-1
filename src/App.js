import './App.css';
import {Route, Routes} from "react-router";

import ProductsList from "./components/products-list";
import ProductAdd from "./components/product-add";
import ButtonAdd from "./components/button-add";
import ProductDetails from "./components/product-details";

function App() {
    return (
        <div className="App container">
            <Routes>
                <Route path='/products' element={[<ProductsList/>,<ButtonAdd/>]}/>
                <Route path='/products/add' element={<ProductAdd/>}/>
                <Route path='/products/:id' element={<ProductDetails/>}/>
            </Routes>
        </div>
    );
}

export default App;
