import { useContext } from "react";
import AppContext from "../../context";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card({ id, text, url, price, width, height }) {
    const { isLoading } = useContext(AppContext);

    return (
        <div className={`${styles.card} d-flex flex-column align-center`}>
            {isLoading ? (
                <ContentLoader
                    speed={1}
                    width={210}
                    height={260}
                    viewBox="0 0 210 260"
                    backgroundColor="#dedede"
                    foregroundColor="#ffffff"
                >
                    <rect x="30" y="28" rx="0" ry="0" width="145" height="107" />
                    <rect x="28" y="146" rx="0" ry="0" width="150" height="34" />
                    <rect x="28" y="187" rx="0" ry="0" width="68" height="35" />
                    <rect x="141" y="189" rx="0" ry="0" width="36" height="32" />
                </ContentLoader>
            ) : (
                <>
                    <img src={url} alt="food" width={width} height={height} id={styles.food} />
                    <p>{text}</p>
                    <div className={`${styles.cardFooter} d-flex align-center justify-between`}>
                        <div className={`${styles.cardPrice} d-flex align-start flex-column`}>
                            <h4>Цена:</h4>
                            <b>{price} руб.</b>
                        </div>
                        <img src="./src/assets/btn-plus.svg" alt="btnPlus" className="cu-p" />
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
