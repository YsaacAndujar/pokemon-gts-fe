import axios from "axios"
import { GenericPaginatedResponse } from "interfaces/generic"
import { GetPaginatedWithPokemonFilter, Trade } from "interfaces/pokemon"

export const getMyTrades = (params?: GetPaginatedWithPokemonFilter) => {
    return axios.get<never, GenericPaginatedResponse<Trade>>('trades/my-trades', { params })
}

export const getGlobalTrades = (params?: GetPaginatedWithPokemonFilter) => {
    return axios.post<never, GenericPaginatedResponse<Trade>>('trades/get-all-trades', params)
}

export const addTrade = (params: {collectionId: number, pokemonsWanted:number[]}) => {
    return axios.post('trades/add-trade', params)
}

export const getTradeDetails = (id: number) => {
    return axios.get<never, Trade>(`trades/${id}`)
}

export const deleteTrade = (id: number) => {
    return axios.delete(`trades/my-trades/${id}`)
}

export const patchTrade = (id: number, pokemonsWanted:number[]) => {
    return axios.patch(`trades/my-trades/${id}`, {pokemonsWanted})
}