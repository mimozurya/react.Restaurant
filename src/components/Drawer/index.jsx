import { useContext } from "react";
import AppContext from "../../context";
import styles from "./Drawer.module.scss";

function Drawer({ openDrawer, setOpenDrawer }) {
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
                <div className={`${styles.drawerCard} d-flex align-center`}>
                    <img
                        src="./src/assets/food3.png"
                        alt="drawerFood"
                        width={70}
                        height={70}
                        id={styles.drawerFood}
                    />
                    <div className={`${styles.drawerCardText} d-flex align-start flex-column`}>
                        <p>Мужские кроссовки Nike Air Max 270</p>
                        <span>12999 руб.</span>
                    </div>
                    <img src="./src/assets/btn-close.svg" alt="close" id={styles.btnClose} />
                </div>

                <div className={styles.drawerFooter}>
                    <div
                        className={`${styles.drawerFooterTotal} d-flex align-center justify-between`}
                    >
                        <p>Итого:</p>
                        <span>21498 руб.</span>
                    </div>
                    <div
                        className={`${styles.drawerFooterTax} d-flex align-center justify-between`}
                    >
                        <p>Налог 5%:</p>
                        <span>1074 руб.</span>
                    </div>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
