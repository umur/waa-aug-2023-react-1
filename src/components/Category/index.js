import Product from "../Product";

const Category = ({ id, name, products }) => (
    <div>
        <h2>Category {id}</h2>
        <p>Name: {name}</p>
        <h3>Products</h3>
        {products.map((product) => (
            <Product key={product.id} {...product} />
        ))}
    </div>
);

export default Category;