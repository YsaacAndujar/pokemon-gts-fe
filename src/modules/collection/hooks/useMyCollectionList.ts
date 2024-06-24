import { LoadingContext } from "context/loading"
import { getMyCollection } from "helpers/collection"
import { GenericPaginatedResponse } from "interfaces/generic"
import { Collection, GetPokemonPaginated, Pokemon } from "interfaces/pokemon"
import { useContext, useEffect, useState } from "react"

export const useMyCollectionList = () => {
  const [pokemonsListResponse, setPokemonsListResponse] = useState<GenericPaginatedResponse<Collection>>({
    result:[],
    totalEntities:0
})
const { setLoading } = useContext(LoadingContext)
const [filters, setFilters] = useState<GetPokemonPaginated>({
    take: 30
})
useEffect(()=>{
    setLoading(true)
    getMyCollection(filters)
    .then((data)=>{
        setPokemonsListResponse(data)
    })
    .finally(()=>{
        setLoading(false)
    })
},[filters])
const onClickPokemon = (pokemon: Pokemon) =>{
    console.log(pokemon)
}
return { setFilters, filters, pokemonsListResponse, onClickPokemon }
}
