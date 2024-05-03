import React from "react";
import { Link } from "react-router-dom";

import s from "./Main.module.scss";
import SignUp from "../../auth/SignUp";

export default function Main() {

  return (
      <main className={s.main}>
        <Link to="/Monobladegg/auth">
          Перейти на сторінку реєстрації
        </Link>
      </main>
  );
}
