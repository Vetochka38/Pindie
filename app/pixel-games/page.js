'use client'
import { getGamesByCategory } from "../data/data-utils"
import { CardsList } from "../components/CardsList/CardsList"
import { endpoints } from "../api/config"
import { useGetDataByCategory } from "../api/api-hooks"
import { Preloader } from "../components/Preloader/Preloader"

export default function New() {
    const pixelGames = useGetDataByCategory(
        endpoints.games,
        "pixel"
    )
    return (
        <main className={"main-inner"}>
            {pixelGames ? (
                <CardsList id="pixel" title="Пиксельные" data={pixelGames} />
            ) : (
                <Preloader />
            )}
        </main>
    )
}