import React from "react";
import s from "./Search.module.scss";
import { AppContext } from "../../../App";

export default function Search() {

  const { items, searchValue, setSearchValue } = React.useContext(AppContext);

  return (
      <main className={s.search}>
        <input
            className={s.searchInput}
            type="text"
            placeholder="Пошук"
            onChange={(event) => setSearchValue(event.target.value)}
        />
      </main>
  );
}
