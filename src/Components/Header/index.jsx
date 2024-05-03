import React from "react";

import s from "./Header.module.scss";

import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";

export default function Header() {
  return (
    <main className={s.main}>
      <div className={s.left}>
        <img src='assets/img/logo.png' className={s.logo} alt="logo" />
        <div className={s.blockTitle}>
          <h1 className={s.title}>Blade-Manga!</h1>
          <h2 className={s.subtitle}>
            Лучший сайт для заказа манги по Европе!
          </h2>
        </div>
      </div>
      <div className={s.right}>
        <BsBookmarkFill
          title="Закладки"
          className={`${s.bsBookmarkFill} ${s.icon}`}
        />
        <IoMdSettings
          title="Настройки"
          className={`${s.ioMdSettings} ${s.icon}`}
        />
        <FaUser title="Личный кабинет" className={`${s.faUser} ${s.icon}`} />
      </div>
    </main>
  );
}
