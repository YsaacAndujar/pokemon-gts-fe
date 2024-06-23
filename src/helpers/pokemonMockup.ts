import axios from "axios"
import { GenericPaginatedResponse } from "interfaces/generic"
import { GetPokemonPaginated, Pokemon, Type } from "interfaces/pokemon"

export const getTypes = () =>{
    return axios.get<never, Type[]>('pokemon-mockup/types')
}

export const getPokemons = (params?: GetPokemonPaginated) =>{
    return axios.get<never, GenericPaginatedResponse<Pokemon>>('pokemon-mockup/', {params})
}