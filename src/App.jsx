import React from "react";
import "../public/assets/Styles/App.scss";
import { Routes, Route } from "react-router-dom";
import axios from "axios";



import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/Profile";
import AuthPage from "./pages/Auth";
import CardPage from "./pages/CardPage";





export const AppContext = React.createContext({});



export default function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading])

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://662398043e17a3ac846fa3bf.mockapi.io/items"
        );
        setItems(data);
        setIsLoading(false);
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
      value={{ items, searchValue, setSearchValue, filtredItems, isLoading }}
    >




      <Routes >
        <Route path="/Monobladegg/" element={<Home />} />
        <Route path="/Monobladegg/favorites" element={<Favorites />} />
        <Route path="/Monobladegg/profile" element={<Profile />} />
        <Route path="/Monobladegg/auth" element={<AuthPage />} />

        {/* <Route path="/Monobladegg/cart1" element={<CartPage1 />} />
        <Route path="/Monobladegg/cart2" element={<CartPage2 />} />
        <Route path="/Monobladegg/cart3" element={<CartPage3 />} />
        <Route path="/Monobladegg/cart4" element={<CartPage4 />} />
        <Route path="/Monobladegg/cart5" element={<CartPage5 />} />
        <Route path="/Monobladegg/cart6" element={<CartPage6 />} />
        <Route path="/Monobladegg/cart7" element={<CartPage7 />} />
        <Route path="/Monobladegg/cart8" element={<CartPage8 />} /> */}

        <Route path="/Monobladegg/:cartId" element={<CardPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>





    </AppContext.Provider>
  );
}
