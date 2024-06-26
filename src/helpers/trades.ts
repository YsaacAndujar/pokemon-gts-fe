import axios from "axios"
import { GenericPaginatedResponse } from "interfaces/generic"
import { GetPaginatedWithPokemonFilter, Trade, TradeRequest } from "interfaces/pokemon"

export const getMyTrades = (params?: GetPaginatedWithPokemonFilter) => {
    return axios.get<never, GenericPaginatedResponse<Trade>>('trades/my-trades', { params })
}

export const getGlobalTrades = (params?: GetPaginatedWithPokemonFilter) => {
    return axios.post<never, GenericPaginatedResponse<Trade>>('trades/get-all-trades', params)
}

export const getRequestsIMade = (params?: GetPaginatedWithPokemonFilter) => {
    return axios.post<never, GenericPaginatedResponse<TradeRequest>>('trades/get-requests-i-made', params)
}

export const getRequestsForMe = (params?: GetPaginatedWithPokemonFilter) => {
    return axios.post<never, GenericPaginatedResponse<TradeRequest>>('trades/get-requests-for-me', params)
}

export const addTrade = (params: {collectionId: number, pokemonsWanted:number[]}) => {
    return axios.post('trades/add-trade', params)
}

export const makeRequest = (params: {tradeId: number, collectionId:number}) => {
    return axios.post('trades/make-request', params)
}

export const getTradeDetails = (id: number) => {
    return axios.get<never, Trade>(`trades/${id}`)
}

export const deleteTrade = (id: number) => {
    return axios.delete(`trades/my-trades/${id}`)
}

export const deleteRequest = (id: number) => {
    return axios.delete(`trades/my-requests/${id}`)
}

export const declineRequest = (id: number) => {
    return axios.delete(`trades/decline-request/${id}`)
}

export const acceptRequest = (id: number) => {
    return axios.post(`trades/accept-trade-request/${id}`)
}

export const patchTrade = (id: number, pokemonsWanted:number[]) => {
    return axios.patch(`trades/my-trades/${id}`, {pokemonsWanted})
}