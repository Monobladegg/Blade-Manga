import React from "react";

import s from "./Header.module.scss";

import { Routes, Route, Link } from "react-router-dom";

import NotFoundPage from "/src/pages/NotFoundPage/";
import Favorites from "/src/pages/FavoritesPage/";
import Profile from "/src/pages/ProfilePage/";
import Home from "/src/pages/HomePage/";

import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <main className={s.main}>
      <div className={s.left}>
        <Link to="/Monobladegg/">
          <img src="assets/img/logo.png" className={s.logo} alt="logo" />
        </Link>
        <div className={s.blockTitle}>
          <h1 className={s.title}>Blade-Manga!</h1>
          <h2 className={s.subtitle}>
            Лучший сайт для заказа манги по Европе!
          </h2>
        </div>
      </div>
      <div className={s.right}>
        <Link to="/Monobladegg/favorites">
          <BsBookmarkFill
            alt="Закладки"
            title="Закладки"
            className={`${s.bsBookmarkFill} ${s.icon}`}
          />
        </Link>
        <Link to="/Monobladegg/orders">
          <FaCartShopping
            alt="Заказы"
            title="Заказы"
            className={`${s.faCartShopping} ${s.icon}`}
          />
        </Link>
        <Link to="/Monobladegg/settings">
          <IoMdSettings
            alt="Настройки"
            title="Настройки"
            className={`${s.ioMdSettings} ${s.icon}`}
          />
        </Link>
        <Link to="/Monobladegg/profile">
          <FaUser
            alt="Личный кабинет"
            title="Личный кабинет"
            className={`${s.faUser} ${s.icon}`}
          />
        </Link>
      </div>
      {/* <Routes >
        <Route path="/Monobladegg" element={<Home />} />
        <Route path="/Monobladegg/favorites" element={<Favorites />} />
        <Route path="/Monobladegg/profile" element={<Profile />} />
      </Routes> */}
    </main>
  );
}
