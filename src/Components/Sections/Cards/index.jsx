import React from "react";
import { AppContext } from "../../../App";
import HomePageSkeleton from "../../Skeleton/HomePageSkeleton";

import s from "./Cards.module.scss";

import Card from "./Card";

export default function Main() {
  const { filtredItems, isLoading } = React.useContext(AppContext);

  return (
      <main className={s.main}>
        {isLoading ? (
          <>
            <HomePageSkeleton />
          </>
        ) : (
          filtredItems.map((item) => (
            <Card
              key={item.id}
              {...item}
            />
          ))
        )}
      </main>
  );
}
