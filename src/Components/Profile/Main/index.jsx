import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";

import s from "./Main.module.scss";

export default function Main() {

  const { authUser } = React.useContext(AppContext);

  return (
      <main className={s.main}>
        <Link to="/Monobladegg/signUp">
          <h3 className={`${s.authLink}`}>Перейти на сторінку реєстрації</h3>
        </Link>
        <Link to="/Monobladegg/signIn">
          <h3 className={`${s.authLink}`}>Перейти на сторінку входу</h3>
        </Link>
        {authUser ? <p>Ваш аккаунт: {authUser.email}</p> : <h1 className={s.text}>У вас пока-что нету аккаута</h1>}
      </main>
  );
}
