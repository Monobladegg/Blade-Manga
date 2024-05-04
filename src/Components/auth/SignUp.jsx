import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function register(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password, confirmPassword).then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <form onSubmit={register}>
        <h2>Создать аккаунт</h2>
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
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Підтвердіть пароль"
        />
        <button>Создать</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      </form>
    </main>
  );
};

export default SignUp;
