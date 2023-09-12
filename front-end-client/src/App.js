import "./App.css";
import ShopContainer from "./containers/ShopContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/landingComponents/ProductList";
import Checkout from "./components/checkoutComponents/Checkout";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <ShopContainer />
            <Routes>
                <Route path ="/" element = {<ProductList/>} />
                <Route path ="/checkout" element = {<Checkout/>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
