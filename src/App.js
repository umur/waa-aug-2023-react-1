import './App.css';
import AddressComponent from './components/AddressComponent';
import CategoryComponent from './components/CategoryComponent';
import ProductComponent from './components/ProductComponent';
import ReviewComponent from './components/ReviewComponent';
import UserComponent from './components/UserComponent';

function App() {

  return (
    <div className="App">
      <ProductComponent />
      <CategoryComponent />
      <UserComponent />
      <AddressComponent />
      <ReviewComponent />
    </div>
  );
}

export default App;
