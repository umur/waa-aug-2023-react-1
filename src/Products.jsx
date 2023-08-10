import Product from './Product';


export default function Products(props){
    return (
        <div>
            {
                props.productList.map((item)=>{
                    return (
                        <Product
                            name={item.name}
                            price={item.price}
                            setSelectedProduct={props.setSelectedProduct}
                            id={item.id}
                        />
                    )
                })
            }
        </div>
    )

}