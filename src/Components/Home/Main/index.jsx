import React from "react";

import Cards from "../../Sections/CardsHome";
import Search from "../../Sections/Search";

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
