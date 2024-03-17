import { CardsList } from "../components/CardsList/CardsList"
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"

export default async function New() {
    const popularGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        "popular"
    )
    return (
        <main className={"main-inner"}>
            <CardsList id="popular" title="Популярное" data={popularGames} />
        </main>
    )
}