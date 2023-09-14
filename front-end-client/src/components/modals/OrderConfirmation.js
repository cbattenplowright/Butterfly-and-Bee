import "./OrderConfirmation.css";
import { ShopContext } from "../contexts/ShopContext";
import { useContext } from "react";

const OrderConfirmation = () => {
    // const [orderId, customerEmail] = useContext;

    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".btn-open");
    const closeModalBtn = document.querySelector(".btn-close");

    // close modal function
    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };

    // open modal function
    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    return (
        <>
            <section className="modal hidden">
                <div className="flex">
                    <button
                        className="btn-close"
                        onClick={() => {
                            closeModal();
                        }}
                    >
                        X
                    </button>
                </div>
                <div>
                    <h3>Order Confirmation:</h3>
                    {/* Import orderId and customer email from ShopContext */}
                    {/* <p>Order Id: ${orderId}</p> */}
                    <h3>You will receive a order confirmation to: </h3>
                    {/* <p>{customerEmail}</p> */}
                </div>
            </section>
            <div className="overlay hidden"></div>
            <button
                className="btn btn-open"
                onClick={() => {
                    openModal();
                }}
            >
                Open Order Confirmation
            </button>
        </>
    );
};

export default OrderConfirmation;
