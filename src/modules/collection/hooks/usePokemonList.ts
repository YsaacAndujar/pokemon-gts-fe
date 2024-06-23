import { getPokemons } from "helpers/pokemonMockup"
import { GenericPaginatedResponse } from "interfaces/generic"
import { GetPokemonPaginated, Pokemon } from "interfaces/pokemon"
import { useEffect, useState } from "react"

export const usePokemonList = () => {
    const [pokemonsListResponse, setPokemonsListResponse] = useState<GenericPaginatedResponse<Pokemon>>()
    const [filters, setFilters] = useState<GetPokemonPaginated>()
    useEffect(()=>{
        getPokemons(filters)
        .then((data)=>{
            setPokemonsListResponse(data)
        })
    },[filters])

    return { setFilters, filters, pokemonsListResponse }
  }
  