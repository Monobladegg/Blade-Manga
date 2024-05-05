import React from "react";
import { AppContext } from "../../../App";
import axios from "axios";

import s from "./Main.module.scss";

import Card from "../../Sections/Card";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, setCartItems } = React.useContext(AppContext);

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://66321a1fc51e14d695635dfb.mockapi.io/cart")
        .then((response) => {
          setCartItems(response.data);
        });
    }

    fetchData();
  }, []);

  return (
    <main className={s.main}>
      {cartItems.length > 0 ? (
        <div>
          <main className={s.cards}>
            {cartItems.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </main>
          <section className={s.confirmOrder}>
              <button onClick={() => window.location = "/Monobladegg/order"} className={s.button}>
                Оформить заказ
              </button>
          </section>
        </div>
      ) : (
        <h1 className={s.h1}>Вы еще ничего не добавили в корзину</h1>
      )}
    </main>
  );
}
