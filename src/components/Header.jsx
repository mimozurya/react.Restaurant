import { UseCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

import Main from "../pages/Main";

function Header({ setOpenDrawer }) {
    const { totalPrice } = UseCart();

    return (
        <header className="d-flex align-center justify-between">
            <div className="clear">
                <Link to="/">
                    <div className="headerLeft d-flex align-center cu-p">
                        <img src="./src/assets/icon-logotype.svg" alt="logotype" />
                        <div
                            className="headerLeftTitle d-flex flex-column align-start"
                            onClick={() => <Main />}
                        >
                            <h1>React Restaurant</h1>
                            <p>Лучший ресторан для твоей берлоги</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="headerRight d-flex align-center">
                <div className="cart d-flex align-center cu-p" onClick={() => setOpenDrawer(true)}>
                    <img src="./src/assets/icon-cart.svg" alt="cart" />
                    <p>{totalPrice} руб.</p>
                </div>
                <div className="clear">
                    <Link to="/orders">
                        <div className="user d-flex align-center cu-p">
                            <img src="./src/assets/icon-user.svg" alt="user" />
                            <p>Мои заказы</p>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
