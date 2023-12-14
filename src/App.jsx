import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AppContext from "./context";
import Header from "./components/Header";
import Main from "./pages/Main";
import Drawer from "./components/Drawer";
import Orders from "./pages/Orders";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const [itemsResponce, cartResponce] = await Promise.all([
                    axios.get("https://6563749fee04015769a73a4d.mockapi.io/items"),
                    axios.get("https://6563749fee04015769a73a4d.mockapi.io/cart"),
                ]);

                setIsLoading(false);
                setItems(itemsResponce.data);
                setCartItems(cartResponce.data);
            } catch (error) {
                alert("Ошибка при запросе данных :(");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
            if (findItem) {
                setCartItems((prev) =>
                    prev.filter((item) => Number(item.parentId) !== Number(obj.id))
                );
                await axios.delete(
                    `https://6563749fee04015769a73a4d.mockapi.io/cart/${findItem.id}`
                );
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await axios.post(
                    "https://6563749fee04015769a73a4d.mockapi.io/cart",
                    obj
                );
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    })
                );
            }
        } catch (error) {
            alert("Ошибка при добавлении в корзину");
            console.log(error);
        }
    };

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://6563749fee04015769a73a4d.mockapi.io/cart/${id}`);
            setCartItems((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            alert("Ошибка при удалении из корзины");
            console.log(error);
        }
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

    return (
        <AppContext.Provider
            value={{
                items,
                isLoading,
                openDrawer,
                cartItems,
                setCartItems,
                isItemAdded,
                onAddToCart,
                setOpenDrawer,
            }}
        >
            <div className="d-flex flex-column align-center">
                <div className="display">
                    <Drawer
                        items={cartItems}
                        openDrawer={openDrawer}
                        setOpenDrawer={setOpenDrawer}
                        onRemove={onRemoveItem}
                    />
                    <Header setOpenDrawer={setOpenDrawer} />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <Main
                                    searchValue={searchValue}
                                    setSearchValue={setSearchValue}
                                    onChangeSearchInput={onChangeSearchInput}
                                    cartItems={cartItems}
                                    onAddToCart={onAddToCart}
                                />
                            }
                        ></Route>
                        <Route exact path="/orders" element={<Orders />}></Route>
                    </Routes>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
