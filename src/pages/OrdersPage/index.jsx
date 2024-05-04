import React from "react";
import Header from "../../Components/Header";
import Main from "../../Components/Orders/Main";

import s from "./OrdersPage.module.scss";

export default function Profile() {
  return (
    <>
      <Header />
      <section className={s.main}>
        <Main />
      </section>
    </>
  );
}
