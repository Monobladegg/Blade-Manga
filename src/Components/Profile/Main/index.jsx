import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";

import s from "./Main.module.scss";

export default function Main() {

  const { AuthUser } = React.useContext(AppContext);

  return (
      <main className={s.main}>
        <Link to="/Monobladegg/signUp">
          <h3 className={`${s.authLink}`}>Перейти на сторінку реєстрації</h3>
        </Link>
        <Link to="/Monobladegg/signIn">
          <h3 className={`${s.authLink}`}>Перейти на сторінку входу</h3>
        </Link>
        {AuthUser ? <h1 className={s.text}>Ваша пошта: {AuthUser.email}</h1> : <h1 className={s.text}>Ви не авторизовані</h1>}
      </main>
  );
}
