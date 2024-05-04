import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      }).catch((error) => {
        console.log(error);
        setError("Такого аккаунт не было в моей Базе Данных");
      });
  };

  return (
    <main>
      <form>
        <h2>Войти в аккаунт</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Е-мейл"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Пароль"
        />
        <button onClick={logIn}>Войти</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      </form>
    </main>
  );
};

export default SignIn;
