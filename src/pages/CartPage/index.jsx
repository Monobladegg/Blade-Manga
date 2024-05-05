import React from "react";
import Header from "../../Components/Header";
import Main from "../../Components/Cart/Main";

import s from "./CartPage.module.scss";

export default function Cart() {
  return (
    <>
      <Header />
      <section className={s.main}>
        <Main />
      </section>
    </>
  );
}
