import './App.css';
import Category from "./Pages/Category";
import User from "./Pages/User";

function App() {
    const categoryData = {
        id: 1,
        name: 'Electronics',
        products: [
            {
                id: 1,
                name: 'Smartphone',
                price: 499.99,
                rating: 4.5,
                category: {
                    id: 1,
                    name: 'Electronics',
                },
                reviews: [
                    { id: 1, comment: 'Great phone!' },
                    { id: 2, comment: 'Battery life could be better.' },
                ],
            },
        ],
    };
  return (
    <div className="App">
        {/*<User/>*/}
        <Category/>
    </div>
  );
}

export default App;
