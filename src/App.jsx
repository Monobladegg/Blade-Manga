import React from "react";
import "../public/assets/Styles/App.scss";
import Home from "./pages/Home";
import axios from "axios";

export const AppContext = React.createContext({});

export default function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://662398043e17a3ac846fa3bf.mockapi.io/items"
        );
        setItems(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  const filtredItems = 
    items.filter((item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });

  return (
    <AppContext.Provider
      value={{ items, searchValue, setSearchValue, filtredItems }}
    >
      <Home />
    </AppContext.Provider>
  );
}
