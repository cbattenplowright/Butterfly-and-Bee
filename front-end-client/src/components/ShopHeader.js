import { Link } from "react-router-dom";
import { ShopContext } from "./contexts/ShopContext";
import { useContext } from "react";
import "./ShopHeader.css";

const ShopHeader = () => {
    const { getBasketTotal } = useContext(ShopContext);
    return (
        <header>
            {/* <img src="images/icons8-bee-50 (1).png" alt="butterfly and bee logo" height="50" width="50"/> */}
            <div className="images">
                <img
                    src="images/icons8-bee-50 (1).png"
                    alt="butterfly and bee logo"
                    height="50"
                    width="50"
                />
                <h1>Butterfly & Bee</h1>
                <img
                    src="images/icons8-butterfly-50 (2).png"
                    alt="butterfly and bee logo"
                    height="50"
                    width="50"
                />
            </div>
            <ul id="nav-bar">
                <li className="menu-icon">
                    <Link to="/">
                        <i className="material-icons-home">
                            <span class="material-symbols-outlined">home</span>
                        </i>
                    </Link>
                </li>
                <li className="menu-icon">
                    <Link to="/checkout">
                        <i className="material-icons-basket">
                            <span class="material-symbols-outlined">shopping_basket</span>
                        </i>
                    </Link>
                </li>
                <li className="basket-total menu-total">
                    <p>£{getBasketTotal()}</p>
                </li>
            </ul>
        </header>
    );
};

export default ShopHeader;
