import { useContext, useState } from "react";
import AppContext from "../../context";
import styles from "./Drawer.module.scss";
import { UseCart } from "../../hooks/useCart";
import axios from "axios";
import Info from "../Info";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ openDrawer, setOpenDrawer, items = [], onRemove }) {
    const { cartItems, setCartItems, totalPrice } = UseCart();
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(
                "https://65780e89197926adf62f67ad.mockapi.io/orders",
                {
                    items: cartItems,
                }
            );
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete("https://6563749fee04015769a73a4d.mockapi.io/cart/" + item.id);
                await delay(2000);
            }
        } catch (error) {
            alert("Ошибка при создании заказа :(");
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <div className={`${styles.overlay} ${openDrawer ? styles.overlayVisible : ""}`}>
            <div className={styles.drawer}>
                <div className={`${styles.drawerHeader} d-flex align-center justify-between`}>
                    <h2>Корзина</h2>
                    <img
                        src="./src/assets/btn-close.svg"
                        alt="close"
                        onClick={() => setOpenDrawer(false)}
                        className="cu-p"
                    />
                </div>

                {items.length > 0 ? (
                    <div className="d-flex flex-column flex">
                        <div className={`${styles.items} flex`}>
                            {items.map((obj) => (
                                <div
                                    key={obj.id}
                                    className={`${styles.cartItem} d-flex align-center mb-20`}
                                >
                                    <div
                                        style={{ backgroundImage: `url(${obj.url})` }}
                                        className={styles.cartItemImg}
                                    ></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.text}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        className={styles.removeBtn}
                                        src="./src/assets/btn-close.svg"
                                        alt="Remove"
                                        onClick={() => onRemove(obj.id)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={styles.cartTotalBlock}>
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{(totalPrice / 100) * 5} руб.</b>
                                </li>
                            </ul>
                            <button
                                disabled={isLoading}
                                onClick={onClickOrder}
                                className={styles.greenButton}
                            >
                                Оформить заказ <img src="./src/assets/icon-go.svg" alt="arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                        description={
                            isOrderComplete
                                ? `Заказ №${orderId} скоро будет передан`
                                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                        }
                        image={
                            isOrderComplete
                                ? "./src/assets/completeOrder.png"
                                : "./src/assets/emptyBox.png"
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default Drawer;
