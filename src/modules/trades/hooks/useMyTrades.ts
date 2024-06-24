import { LoadingContext } from "context/loading"
import { getMyTrades } from "helpers/trades"
import { GenericPaginatedResponse } from "interfaces/generic"
import { GetPaginatedWithPokemonFilter, Pokemon, Trade } from "interfaces/pokemon"
import { useContext, useEffect, useState } from "react"

export const useMyTrades = () => {
    const [tradesResponse, setTradesResponse] = useState<GenericPaginatedResponse<Trade>>({
        result: [],
        totalEntities: 0
    })
    const { setLoading } = useContext(LoadingContext)
    const [filters, setFilters] = useState<GetPaginatedWithPokemonFilter>({
        take: 30
    })
    useEffect(() => {
        setLoading(true)
        getMyTrades(filters)
            .then((data) => {
                setTradesResponse(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [filters])

    const onClickPokemon = (pokemon: Pokemon) => {
        console.log(pokemon)
    }
    return { setFilters, filters, tradesResponse, onClickPokemon }
}
