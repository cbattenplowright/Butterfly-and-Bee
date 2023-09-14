const OrderConfirmation = () => {
    return (
        <>
            <section className="modal hidden">
                <div className="flex">
                    <button className="btn-close">X</button>
                </div>
                <div>
                    <h3>Order Confirmation:</h3>
                    {/* Import orderId and customer email from ShopContext */}
                    <p>Order Id: ${orderId}</p>
                    <h3>You will receive a order confirmation to: </h3>
                    <p>{customerEmail}</p>
                </div>
            </section>
            <div className="overlay hidden"></div>
            <button className="btn btn-open">Open Order Confirmation</button>
        </>
    );
};

export default OrderConfirmation;
