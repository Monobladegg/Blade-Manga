import React from "react";
import Header from "../../Components/Header";
import SignUp from "../../Components/auth/SignUp";

import s from "./Auth.module.scss";

export default function Auth() {
  return (
    <>
      <Header />
      <section className={s.main}>
        <SignUp />
      </section>
    </>
  );
}
