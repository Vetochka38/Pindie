import { CardsList } from "../components/CardsList/CardsList"
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"

export default async function New() {
    const runnerGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        "runner"
    )
    return (
        <main className={"main-inner"}>
            <CardsList id="runner" title="Раннеры" data={runnerGames} />
        </main>
    )
}