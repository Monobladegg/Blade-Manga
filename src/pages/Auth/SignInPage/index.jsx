import React from "react";
import Header from "../../../Components/Header";
import SingIn from "../../../Components/auth/SignIn";

import s from "./SignInPage.module.scss";

export default function SingInPage() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <SingIn />
      </main>
    </>
  );
}
