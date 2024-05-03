import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const register = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }
    createUserWithEmailAndPassword(email, password, confirmPassword)
      .then((user) => {
        console.log(user);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(null);
      })
      .catch((error) => {
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
          placeholder="Email"
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
          placeholder="Подтвердите пароль"
        />
        <button>Создать</button>
      </form>
    </main>
  );
};

export default SignUp;
