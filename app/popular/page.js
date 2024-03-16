import { getGamesByCategory } from "../data/data-utils"
import { CardsList } from "../components/CardsList/CardsList"

export default function New() {
    const popularGames = getGamesByCategory("popular")
    return (
        <main className={"main-inner"}>
            <CardsList id="popular" title="Популярное" data={popularGames} />
        </main>
    )
}