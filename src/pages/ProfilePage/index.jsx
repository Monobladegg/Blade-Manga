import React from "react";
import Header from "../../Components/Header";
import Main from "../../Components/Profile/Main";

import s from "./ProfilePage.module.scss";

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
