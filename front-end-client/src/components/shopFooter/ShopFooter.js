import "./ShopFooter.css";

const ShopFooter = () => {
    return (
        <footer className="shop-footer">
            <section className="social-media-item-container">
                <img
                    src="/images/icon-facebook.svg"
                    alt="Facebook Logo"
                    className="facebook-logo logo"
                />
                <img
                    src="/images/icon-instagram.svg"
                    alt="Instagram Logo"
                    className="instagram-logo logo"
                />
                <img
                    src="/images/icon-linkedin.svg"
                    alt="LinkedIn Logo"
                    className="linkedin-logo logo"
                />
            </section>
            <section className="shop-name">Butterfly&Bee</section>
            <section className="shop-info">
                <button>Contact</button>
                <button>About Us</button>
                <button>Privacy Policy</button>
            </section>
        </footer>
    );
};

export default ShopFooter;
