import React from "react";
import Header from "../../Components/Header";
import axios from "axios";

import s from "./Card.module.scss";
import { useParams } from "react-router-dom";

export default function Card() {
  const [item, setItem] = React.useState(1);
  const { cartId } = useParams();

  React.useEffect(() => {
    if (
      Number(cartId.replace("cart", "")) > 0 &&
      Number(cartId.replace("cart", "")) < 9
    ) {
      axios
        .get(
          `https://662398043e17a3ac846fa3bf.mockapi.io/items/${cartId.replace(
            "cart",
            ""
          )}`
        )
        .then((response) => {
          setItem(response.data);
          console.log(cartId, response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      window.location = "/Monobladegg/";
    }
  }, []);

  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.card}>
          <img
            src={item.img}
            className={s.cardImg}
            alt="cardImg"
            title={item.title}
          />
          <section className={s.cardTitles}>
          <div className={s.cardSubSubtitles}>
            <h3 className={s.cardTitle}>{item.title}</h3>
            <div className={s.cardSubtitles}>
              <h4 className={s.cardSubtitle}>{item.subtitle}</h4>
              <h4 className={s.cardPrice}>{item.price} грн.</h4>
            </div>
          </div>
          <button className={s.button}>
            Заказать
          </button>
          </section> 
        </div>
      </main>
    </>
  );
}
