import axios from "axios";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [itemsResponce] = await Promise.all([
                    axios.get("https://6563749fee04015769a73a4d.mockapi.io/items"),
                ]);

                setItems(itemsResponce.data);
            } catch (error) {
                alert("Ошибка при запросе данных :(");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="d-flex flex-column align-center">
            <div className="display">
                <Header />
                <Main />
                {console.log(items)}
            </div>
        </div>
    );
}

export default App;
