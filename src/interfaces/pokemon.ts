import { GenericPaginatedFilter } from "./generic";

export interface GetPokemonFilter {
    name?: string;
    type?: number;
    id?: number;
}

export interface Type {
    id: number
    name: string
}

export interface Pokemon {
    id: number
    name: string
    sprite: string
    types?: Type[]
    collection?: Collection
    trade?: Trade
    tradeRequest?: TradeRequest
}

export interface Trade {
    id: number
    collection: Collection
    pokemonsWanted: Pokemon[]
}

export interface Collection {
    id: number
    pokemon: Pokemon
    trade?: Trade
    tradeRequest?: TradeRequest
}

export interface TradeRequest {
    id: number,
    trade: Trade,
    collection: Collection
}

export interface History {
    id: number;
    myPokemon: Pokemon;
    isMyRequest: boolean
}
export interface GetPaginatedWithPokemonFilter extends GetPokemonFilter, GenericPaginatedFilter {

}

export interface GetPaginatedGlobalTradesFilter extends GenericPaginatedFilter {
    myPokemon?: GetPokemonFilter
    theirPokemon?: GetPokemonFilter
}