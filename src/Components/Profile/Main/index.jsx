import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

import s from "./Main.module.scss";

export default function Main() {
  const { AuthUser } = React.useContext(AppContext);

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

  return (
    <main className={s.main}>
      <Link to="/Monobladegg/signUp">
        <h3 className={`${s.authLink}`}>Перейти на сторінку реєстрації</h3>
      </Link>
      <Link to="/Monobladegg/signIn">
        <h3 className={`${s.authLink}`}>Перейти на сторінку входу</h3>
      </Link>
      {AuthUser ? (
        <>
          <h1 className={s.text}>Ваша пошта: {AuthUser.email}</h1>
          <button onClick={userSignOut} className={s.button}>
            Вийти з аккаунту
          </button>
        </>
      ) : (
        <h1 className={s.text}>Ви не авторизовані</h1>
      )}
    </main>
  );
}
