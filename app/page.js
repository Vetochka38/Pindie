import { getGamesByCategory } from './data/data-utils';

import { Banner } from './components/Banner/Banner'
import { CardsList } from './components/CardsList/CardsList'
import { Promo } from './components/Promo/Promo'

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
