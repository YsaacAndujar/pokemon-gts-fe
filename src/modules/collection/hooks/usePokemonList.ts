import { LoadingContext } from "context/loading"
import { getPokemons } from "helpers/pokemonMockup"
import { GenericPaginatedResponse } from "interfaces/generic"
import { GetPokemonPaginated, Pokemon } from "interfaces/pokemon"
import { useContext, useEffect, useState } from "react"

export const usePokemonList = () => {
    const [pokemonsListResponse, setPokemonsListResponse] = useState<GenericPaginatedResponse<Pokemon>>({
        result:[],
        total:0
    })
    const { setLoading } = useContext(LoadingContext)
    const [filters, setFilters] = useState<GetPokemonPaginated>({
        take: 30
    })
    useEffect(()=>{
        setLoading(true)
        getPokemons(filters)
        .then((data)=>{
            setPokemonsListResponse(data)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[filters])

    return { setFilters, filters, pokemonsListResponse }
  }
  