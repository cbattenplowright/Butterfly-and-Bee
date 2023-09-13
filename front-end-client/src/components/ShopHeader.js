import { Link } from "react-router-dom";

const ShopHeader = () => {
    return (
        <header>
            <img src="/logo512.png" alt="butterfly and bee logo" height="100" width="100"/>
            <h1>Butterfly and Bee</h1>
            <ul id="nav-bar">
                <li>
                    <Link to="/">
                        <i className = "material-icons-home">
                        <span class="material-symbols-outlined">
                    home
                        </span>
                        </i>
                    </Link>
                </li>
                <li>
                    <Link to="/checkout">
                        <i className="material-icons-basket">
                        <span class="material-symbols-outlined">
                                shopping_basket
                        </span>
                    </i>
                    </Link>
                </li>
                <li className="basket-total">
                    <p>£</p>
                </li>
            </ul>
        </header>
    );
};

export default ShopHeader;
