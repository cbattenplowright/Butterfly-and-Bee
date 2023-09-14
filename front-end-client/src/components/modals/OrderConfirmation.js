import "./OrderConfirmation.css";
import { ShopContext } from "../contexts/ShopContext";
import { useContext } from "react";

const OrderConfirmation = () => {
    const { modal, toggleModal, orderId, customerEmail } = useContext(ShopContext);

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <>
            {/* <button onClick={toggleModal} className="btn-modal">
                Open
            </button> */}

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Order Confirmed</h2>
                        <p>{`Your order number is: ${orderId}`}</p>
                        <p>{`A confirmation email has been sent to: ${customerEmail}`}</p>
                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderConfirmation;
