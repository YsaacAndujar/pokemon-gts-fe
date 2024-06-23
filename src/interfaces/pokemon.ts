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
}

export interface GetPokemonPaginated extends GetPokemonFilter, GenericPaginated {
    
}