import React from "react";
import s from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <main className={s.card}>
      <Link to={`/Monobladegg/${props.id}`}>
        <img
          src={props.img}
          className={s.cardImg}
          alt="cardImg"
          title={props.title}
        />
        <section className={s.cardTitles}>
          <h3 className={s.cardTitle}>{props.title}</h3>
          <div className={s.cardSubtitles}>
            <h4 className={s.cardSubtitle}>{props.subtitle}</h4>
            <h4 className={s.cardPrice}>{props.price} грн.</h4>
          </div>
        </section>
      </Link>
    </main>
  );
}
