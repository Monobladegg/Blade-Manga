import React from "react";
import { AppContext } from "../../../App";
import axios from "axios";

import s from "./Main.module.scss";

import Card from "../../Sections/Card";

export default function Order() {
  const [orderItems, setOrderItems] = React.useState([]);
  const { cartItems, setCartItems } = React.useContext(AppContext);

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://66321a1fc51e14d695635dfb.mockapi.io/cart")
        .then((response) => {
          setOrderItems(response.data);
        });
    }

    fetchData();
  }, []);

  async function confirmOrder() {
    try {
      for (let i = 0; i < orderItems.length; i++) {
        await axios
          .delete(
            `https://66321a1fc51e14d695635dfb.mockapi.io/cart/${orderItems[i].id}`
          )
      }
      setCartItems([]);
      setOrderItems([]);
      alert("Ви оформили кредит на сумму 400 тисяч гривень");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main className={s.main}>
      {orderItems.length > 0 ? (
        <>
          <main className={s.cards}>
            {orderItems.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </main>
          <section className={s.confirmOrder}>
            <button onClick={() => setOrderItems([])} className={s.button}>
              Очистити Замовлення
            </button>
            <button onClick={confirmOrder} className={s.button}>
              Оформити Замовлення
            </button>
          </section>
        </>
      ) : (
        <main className={s.cards}>
          <h1 className={s.h1}>В замовленні нема товарів</h1>
        </main>
      )}
    </main>
  );
}
