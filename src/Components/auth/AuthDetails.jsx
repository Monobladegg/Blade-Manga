import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";
import { AppContext } from "../../App";

function AuthDetails() {
  const { authUser, setAuthUser } = React.useContext(AppContext);
  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  function userSignOut() {
    signOut(auth)
      .then(() => {
        alert("Вы вышли из аккаунта");
      })
      .catch((error) => {
        console.log(error);
        alert("Вам не удается выйти из аккаунта");
      })
  }

  return (
    <>
      {AuthUser ? (
        <>
          <p>Вы вошли под почтой {AuthUser.email}</p>
          <button onClick={userSignOut}>Выход</button>
        </>
      ) : (
        <p>Вы не вошли</p>
      )}
    </>
  );
}

export default AuthDetails;
