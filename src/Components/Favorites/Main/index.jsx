import React from "react";
import { AppContext } from "../../../App";
import axios from "axios";

import s from "./Favorites.module.scss";

import Card from "../../Sections/Card";

export default function Favorites() {
  const { favorites, setFavorites } = React.useContext(AppContext);

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://662398043e17a3ac846fa3bf.mockapi.io/favorites")
        .then((response) => {
          console.log(response.data);
          setFavorites(response.data);
        });
    }

    fetchData();
  }, []);

  return (
    <main className={s.main}>
      {favorites.length > 0 ? (
        <main className={s.cards}>
          {favorites.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </main>
      ) : (
        <h1 className={s.h1}>Закладок пока-что нет</h1>
      )}
    </main>
  );
}
