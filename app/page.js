'use client'
import { getGamesByCategory } from './data/data-utils';

import { Banner } from './components/Banner/Banner'
import { CardsList } from './components/CardsList/CardsList'
import { Promo } from './components/Promo/Promo'

import Image from "next/image";
import styles from "./page.module.css";
import { getNormalizedGamesDataByCategory } from './api/api-utils';
import { endpoints } from './api/config';
import { useGetDataByCategory } from './api/api-hooks';
import { Preloader } from './components/Preloader/Preloader';

export default function Home() {
  const popularGames = useGetDataByCategory(
    endpoints.games,
    "popular"
  )
  const newGames = useGetDataByCategory(
    endpoints.games,
    "new"
  )
  return (
    <main className="main">
      <Banner />
      {popularGames ? (
        <CardsList id="popular" title="Популярное" data={popularGames} />
      ) : (
        <Preloader />
      )}
      {newGames ? (
        <CardsList id="new" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
      <Promo />
    </main>
  );
}
