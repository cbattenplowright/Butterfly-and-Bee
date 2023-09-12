import { Link } from "react-router-dom";

const ShopHeader = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/checkout">Checkout</Link>
                </li>
            </ul>
        </header>
    );
};

export default ShopHeader;
