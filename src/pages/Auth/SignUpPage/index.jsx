import React from "react";
import Header from "../../../Components/Header";
import SignUp from "../../../Components/auth/SignUp";

import s from "./SignUpPage.module.scss";

export default function SingUpPage() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <SignUp />
      </main>
    </>
  );
}
