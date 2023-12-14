import React, { useContext } from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
    const { setOpenDrawer } = useContext(AppContext);
    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mt-50 mb-20" width={120} src={image} alt="emptyBox" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={() => setOpenDrawer(false)} className="greenButton">
                <img src="./src/assets/icon-go.svg" alt="arrow" className="ml-20" />
                Вернуться назад
            </button>
        </div>
    );
};

export default Info;
