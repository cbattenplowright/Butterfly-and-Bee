import "./App.css";
import ShopContainer from "./containers/ShopContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkoutComponents/Checkout";
import ShopHeader from "./components/ShopHeader";
import ShopFooter from "./components/shopFooter/ShopFooter";
import ShopContextProvider from "./components/contexts/ShopContext";

function App() {
    return (
        <ShopContextProvider>
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
        </ShopContextProvider>
    );
}

export default App;
