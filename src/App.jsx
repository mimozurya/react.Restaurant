import axios from "axios";

import { useEffect, useState } from "react";
import AppContext from "./context";

import Header from "./components/Header";
import Main from "./pages/Main";
import Drawer from "./components/Drawer";

function App() {
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const [itemsResponce] = await Promise.all([
                    axios.get("https://6563749fee04015769a73a4d.mockapi.io/items"),
                ]);

                setIsLoading(false);
                setItems(itemsResponce.data);
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

    return (
        <AppContext.Provider
            value={{
                items,
                isLoading,
                openDrawer,
            }}
        >
            <div className="d-flex flex-column align-center">
                <div className="display">
                    <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
                    <Header setOpenDrawer={setOpenDrawer} />
                    <Main searchValue={searchValue} onChangeSearchInput={onChangeSearchInput} />
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
