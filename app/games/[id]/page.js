"use client"
import Styles from "./Game.module.css";
import { getGameById } from "@/app/data/data-utils";
import { useRouter } from "next/navigation";

export default function GamePage(props) {
  const game = getGameById(props.params.id)
  const router = useRouter()
  return (
    <main className="main">
      {game ? (
        <>
          <section className={Styles["game"]}>
            <iframe
              className={Styles["game__iframe"]}
              src={game.link}
            ></iframe>
          </section>
          <section className={Styles["about"]}>
            <h2 className={Styles["about__title"]}>{game.title}</h2>
            <div className={Styles["about__content"]}>
              <p className={Styles["about__description"]}>
                {game.description}
              </p>
              <div className={Styles["about__author"]}>
                <p>
                  Автор:
                  <span className={Styles["about__accent"]}>{game.developer}</span>
                </p>
              </div>
            </div>
            <div className={Styles["about__vote"]}>
              <p className={Styles["about__vote-amount"]}>
                За игру уже проголосовали:
                <span className={Styles["about__accent"]}>{game.users.length}</span>
              </p>
              <button className={`button ${Styles["about__vote-button"]}`} onClick={() => router.push('/auth-form')}>
                Голосовать
              </button>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className={Styles["game"]}>
            <img className={Styles["game__iframe"]} src="/images/no-game.jpg" alt="Такой игры не сущеcтвует"/>
          </section>
        </>
      )
      }
    </main>
  );
}
