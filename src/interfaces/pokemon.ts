import { GenericPaginated } from "./generic";

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
    types: Type[]
    collection?: Collection
    trade?: Trade
}

export interface Trade {
    id: number
    collection: Collection
    pokemonsWanted: Pokemon[]
}

export interface Collection {
    id: number
    pokemon: Pokemon
}

export interface GetPaginatedWithPokemonFilter extends GetPokemonFilter, GenericPaginated {

}