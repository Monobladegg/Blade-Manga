import React from "react";
import "../public/assets/Styles/App.scss";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/Auth/SignUpPage";
import SignInPage from "./pages/Auth/SignInPage";
import CardPage from "./pages/CardPage";
import OrdersPage from "./pages/OrdersPage";

export const AppContext = React.createContext({});

export default function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [favorites, setFavorites] = React.useState([]);
  const [AuthUser, setAuthUser] = React.useState(null);
  
  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  function userSignOut() {
    signOut(auth)
      .then(() => {
        alert("Вы вышли из аккаунта");
      })
      .catch((error) => {
        console.log(error);
        alert("Вам не удается выйти из аккаунта");
      })
  }

  async function onRemoveFavorite(item) {
    try {
      if (favorites.find((obj) => obj.parentId === item.parentId)) {
        const id = favorites.find((obj) => obj.parentId === item.parentId).id;
        await axios.delete(
          `https://662398043e17a3ac846fa3bf.mockapi.io/favorites/${id}`
        );
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  }

  var onAddFavorite = async function (item) {
    if (favorites.find((obj) => obj.parentId === item.parentId)) {
    } else {
      try {
        const { data } = await axios.post(
          "https://662398043e17a3ac846fa3bf.mockapi.io/favorites",
          item
        );
        setFavorites([...favorites, data]);
      } catch (e) {
        console.log(e);
      }
    }
  }

  React.useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://662398043e17a3ac846fa3bf.mockapi.io/items"
        );
        setItems(data);
        setIsLoading(false);
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
      value={{
        items,
        searchValue,
        setSearchValue,
        filtredItems,
        isLoading,
        onAddFavorite,
        favorites,
        setFavorites,
        onRemoveFavorite,
        AuthUser,
      }}
    >
      <Routes>
        <Route path="/Monobladegg/" element={<HomePage />} />
        <Route path="/Monobladegg/favorites" element={<FavoritesPage />} />
        <Route path="/Monobladegg/profile" element={<ProfilePage />} />
        <Route path="/Monobladegg/signUp" element={<SignUpPage />} />
        <Route path="/Monobladegg/signIn" element={<SignInPage />} />
        <Route path="/Monobladegg/orders" element={<OrdersPage />} />

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
