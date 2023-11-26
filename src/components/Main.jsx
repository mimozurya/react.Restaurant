function Main() {
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
                    <input type="text" placeholder="Фильтр" />
                </div>
            </div>
            <div className="cards d-flex align-center flex-wrap">
                <div className="card d-flex flex-column align-center">
                    <img
                        src="./src/assets/food1.png"
                        alt="food1"
                        width={59}
                        height={100}
                        id="food"
                    />
                    <p>Напиток "Берега Анапы" с лимоном</p>
                    <div className="cardFooter d-flex align-center justify-between">
                        <div className="cardPrice d-flex align-start flex-column">
                            <h4>Цена:</h4>
                            <b>699 руб.</b>
                        </div>
                        <img src="./src/assets/btn-plus.svg" alt="btnPlus" />
                    </div>
                </div>
                <div className="card d-flex flex-column align-center">
                    <img
                        src="./src/assets/food2.png"
                        alt="food2"
                        width={151}
                        height={102}
                        id="food"
                    />
                    <p>Бургер "Святое королество куба"</p>
                    <div className="cardFooter d-flex align-center justify-between">
                        <div className="cardPrice d-flex align-start flex-column">
                            <h4>Цена:</h4>
                            <b>439 руб.</b>
                        </div>
                        <img src="./src/assets/btn-plus.svg" alt="btnPlus" />
                    </div>
                </div>
                <div className="card d-flex flex-column align-center">
                    <img
                        src="./src/assets/food3.png"
                        alt="food3"
                        width={105}
                        height={100}
                        id="food"
                    />
                    <p>Салат "Греческая мифология на потом"</p>
                    <div className="cardFooter d-flex align-center justify-between">
                        <div className="cardPrice d-flex align-start flex-column">
                            <h4>Цена:</h4>
                            <b>199 руб.</b>
                        </div>
                        <img src="./src/assets/btn-plus.svg" alt="btnPlus" />
                    </div>
                </div>
                <div className="card d-flex flex-column align-center">
                    <img
                        src="./src/assets/food4.png"
                        alt="food4"
                        width={138}
                        height={100}
                        id="food"
                    />
                    <p>Мясо "Проходили мимо инферно"</p>
                    <div className="cardFooter d-flex align-center justify-between">
                        <div className="cardPrice d-flex align-start flex-column">
                            <h4>Цена:</h4>
                            <b>799 руб.</b>
                        </div>
                        <img src="./src/assets/btn-plus.svg" alt="btnPlus" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;
