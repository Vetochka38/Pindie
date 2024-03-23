'use client'
import { CardsList } from "../components/CardsList/CardsList"
import { endpoints } from "../api/config"
import { useGetDataByCategory } from "../api/api-hooks"
import { Preloader } from "../components/Preloader/Preloader"

export default function New() {
    const runnerGames = useGetDataByCategory(
        endpoints.games,
        "runner"
    )
    return (
        <main className={"main-inner"}>
            {runnerGames ? (
                <CardsList id="runner" title="Раннеры" data={runnerGames} />
            ) : (
                <Preloader />
            )}
        </main>
    )
}