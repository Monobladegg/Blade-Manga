import React from "react";
import "../public/assets/Styles/App.scss";
import { Routes, Route } from "react-router-dom";
import axios from "axios";



import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/Profile";
import AuthPage from "./pages/Auth";





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

  const filtredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });





  return (
    <AppContext.Provider
      value={{ items, searchValue, setSearchValue, filtredItems }}
    >




      <Routes >
        <Route path="/Monobladegg/" element={<Home />} />
        <Route path="/Monobladegg/favorites" element={<Favorites />} />
        <Route path="/Monobladegg/profile" element={<Profile />} />
        <Route path="/Monobladegg/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>





    </AppContext.Provider>
  );
}
