import React from "react";
import Header from "../../Components/Header";
import axios from "axios";
import ContentLoader from "react-content-loader";
import CardPageSkeleton from "../../Components/Skeleton/CardPageSkeleton";

import { FaHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";

import s from "./CardPage.module.scss";
import { useParams } from "react-router-dom";

import { AppContext } from "../../App";

export default function Card() {
  const { onAddFavorite, favorites, setFavorites, onRemoveFavorite, AuthUser, onAddCart } =
    React.useContext(AppContext);

  const [item, setItem] = React.useState({});
  const { cartId } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        if (
          Number(cartId.replace("cart", "")) > 0 &&
          Number(cartId.replace("cart", "")) < 9
        ) {
          setIsLoading(true);
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
              setIsLoading(false);
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          window.location = "/Monobladegg/";
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.card}>
          {isLoading ? (
            <CardPageSkeleton />
          ) : (
            <>
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
                    <h4 className={s.cardSubtitle}>
                      {item.subtitle} {item.price} грн.
                    </h4>
                  </div>
                </div>
                <div className={s.buttons}>
                  {AuthUser ? (
                    <button
                      onClick={() => onAddCart(item)}
                      className={`${s.button} ${s.button1}`}
                    >
                      Add to cart <FaCartPlus className={s.cart} />
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    onClick={() => onAddFavorite(item)}
                    className={`${s.button} ${s.button2}`}
                  >
                    Добавить в закладки <FaHeart className={s.heart} />
                  </button>
                  <button
                    onClick={() => onRemoveFavorite(item)}
                    className={`${s.button} ${s.button2}`}
                  >
                    Удалить из закладок
                  </button>
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
}
