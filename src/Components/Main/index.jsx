import React from "react";
import { AppContext } from "../../App";

import Cards from "../Sections/Cards";
import Search from "../Sections/Cards/Search";

import s from "./Main.module.scss";

export default function Main() {

  return (
      <main className={s.main}>
        <Search />
        <div className={s.cards}>
          <Cards/>
        </div>
      </main>
  );
}
