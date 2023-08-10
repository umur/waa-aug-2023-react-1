import {Link} from "react-router-dom";

export default function buttonAdd() {
    return (
        <div>
            <Link to='/products/add'><button type="button" className="btn btn-primary btn-lg">Add Product</button></Link>
        </div>

    )
}