import './App.css';
import Category from "./Pages/Category";
import User from "./Pages/User";
import {Link, Route, Routes} from "react-router-dom";
import UnknownPage from "./UnknownPage";

function App() {
  return (
    <div className="App">
        <h1>Simple CRUD app</h1>
        <ul>
            <li><Link to="/user">Users</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/error">Show 404 page</Link></li>
        </ul>

        <Routes>
            <Route path="/user" element={<User/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="*" element={<UnknownPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
