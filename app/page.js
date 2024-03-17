import { getGamesByCategory } from './data/data-utils';

import { Banner } from './components/Banner/Banner'
import { CardsList } from './components/CardsList/CardsList'
import { Promo } from './components/Promo/Promo'

import Image from "next/image";
import styles from "./page.module.css";
import { getNormalizedGamesDataByCategory } from './api/api-utils';
import { endpoints } from './api/config';

export default async function Home() {
  // const dataFromUrl = await getData('https://api-code-2.practicum-team.ru/games')
  // console.log(dataFromUrl)
  const popularGames =await getNormalizedGamesDataByCategory(endpoints.games, "popular")
  const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new")
  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
