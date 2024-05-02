import Card from "../Sections/Card";
import s from "./Main.module.scss";
import React from "react";
import { AppContext } from "../../App";

export default function Main() {
  const { items } = React.useContext(AppContext);

  return (
      <main className={s.main}>
        {items.map((item) => (
          <Card
            key={item.id}
            {...item}
          />
        ))}
      </main>
  );
}
