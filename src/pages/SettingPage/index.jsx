import React from "react";
import Header from "../../Components/Header";
import Main from "../../Components/Setting/Main";

import s from "./SettingPage.module.scss";

export default function Settings() {
  return (
    <>
      <Header />
      <section className={s.main}>
        <Main />
      </section>
    </>
  );
}
