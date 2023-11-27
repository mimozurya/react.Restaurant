import { useContext } from "react";
import AppContext from "../context";

import Card from "../components/Card";

function Main({ searchValue, onChangeSearchInput }) {
    const { items, isLoading } = useContext(AppContext);

    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.text.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (isLoading ? [...Array(16)] : filtredItems).map((item, index) => (
            <Card key={index} {...item} />
        ));
    };

    return (
        <section>
            <div className="filterHeading d-flex align-center justify-between">
                <h2>Все ресторанные блюда</h2>
                <div className="filter d-flex align-center justify-between">
                    <select name="food">
                        <option value="">Выберите нужную категорию</option>
                        <option value="meat">Мясо</option>
                        <option value="drink">Напитки</option>
                        <option value="salad">Салаты</option>
                        <option value="burger">Бургеры</option>
                        <option value="pizza">Пиццы</option>
                    </select>
                </div>
                <div className="search d-flex align-center">
                    <img src="./src/assets/icon-search.svg" alt="search" />
                    <input
                        onChange={onChangeSearchInput}
                        value={searchValue}
                        placeholder="Поиск..."
                    />
                </div>
            </div>
            <div className="cards d-flex align-center flex-wrap">{renderItems()}</div>
        </section>
    );
}

export default Main;
