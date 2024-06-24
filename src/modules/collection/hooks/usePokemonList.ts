import { message } from 'antd'
import { LoadingContext } from "context/loading"
import { addPokemonToCollection, getPokemons } from "helpers/pokemonMockup"
import { GenericPaginatedResponse } from "interfaces/generic"
import { GetPokemonPaginated, Pokemon } from "interfaces/pokemon"
import { useContext, useEffect, useState } from "react"

export const usePokemonList = () => {
    const [pokemonsListResponse, setPokemonsListResponse] = useState<GenericPaginatedResponse<Pokemon>>({
        result:[],
        totalEntities:0
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
    const onClickPokemon = (pokemon: Pokemon) =>{
        setLoading(true)
        addPokemonToCollection(pokemon.id)
        .then(()=>{
            message.success(`${pokemon.name} added`)
        })
        .finally(()=>{
            setLoading(false)
        })
    }
    return { setFilters, filters, pokemonsListResponse, onClickPokemon }
  }
  