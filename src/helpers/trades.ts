import axios from "axios"
import { GenericPaginatedResponse } from "interfaces/generic"
import { GetPaginatedWithPokemonFilter, Trade } from "interfaces/pokemon"

export const getMyTrades = (params?: GetPaginatedWithPokemonFilter) => {
    return axios.get<never, GenericPaginatedResponse<Trade>>('trades/my-trades', { params })
}