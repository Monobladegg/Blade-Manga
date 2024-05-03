import React from "react";
import { AppContext } from "../../../App";

import s from "./Cards.module.scss";

import Card from "./Card";

export default function Main() {
  const { filtredItems } = React.useContext(AppContext);

  return (
      <main className={s.main}>
        {filtredItems.map((item) => (
          <Card
            key={item.id}
            {...item}
          />
        ))}
      </main>
  );
}
