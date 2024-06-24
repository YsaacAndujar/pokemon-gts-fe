import axios from "axios"
import { GenericPaginatedResponse } from "interfaces/generic"
import { Collection, GetPaginatedWithPokemonFilter, Pokemon, Type } from "interfaces/pokemon"

export const getTypes = () => {
    return axios.get<never, Type[]>('pokemon-mockup/types')
}

export const getPokemons = (params?: GetPaginatedWithPokemonFilter) => {
    return axios.get<never, GenericPaginatedResponse<Pokemon>>('pokemon-mockup/', { params })
}

export const getMyCollection = (params?: GetPaginatedWithPokemonFilter) => {
    return axios.get<never, GenericPaginatedResponse<Collection>>('collection/', { params })
}

export const addPokemonToCollection = (pokemonId: number) => {
    return axios.post('collection', { pokemonId })
}

export const getCollectionDetails = (id: number) => {
    return axios.get<never, Collection>(`collection/${id}`)
}

export const deletePokemonFromCollection = (id: number) => {
    return axios.delete(`collection/${id}`)
}