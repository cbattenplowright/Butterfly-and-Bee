import "./App.css";
import ShopContainer from "./containers/ShopContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/checkoutComponents/Checkout";
import ShopHeader from "./components/ShopHeader";
import ShopFooter from "./components/ShopFooter";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ShopHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<ShopContainer />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </main>
                <ShopFooter />
            </div>
        </BrowserRouter>
    );
}

export default App;
