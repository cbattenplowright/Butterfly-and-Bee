import { Link } from "react-router-dom";
import { ShopContext } from "./contexts/ShopContext";
import { useContext } from "react";

const ShopHeader = () => {
    const { getBasketTotal } = useContext(ShopContext);
    return (
        <header>
            {/* <img src="images/icons8-bee-50 (1).png" alt="butterfly and bee logo" height="50" width="50"/> */}
            <div className ="images">
            <h1>Butterfly & Bee</h1>
            <img src="images/icons8-bee-50 (1).png" alt="butterfly and bee logo" height="50" width="50"/>
            </div>
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
                    <p>£{getBasketTotal()}</p>
                </li>
            </ul>
        </header>
    );
};

export default ShopHeader;
