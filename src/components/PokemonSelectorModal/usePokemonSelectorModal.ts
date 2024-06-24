import { getPokemons } from "helpers/collection"
import { useDelayFunction } from "hooks"
import { GetPaginatedWithPokemonFilter, Pokemon } from "interfaces/pokemon"
import { useEffect, useState } from "react"

export const usePokemonSelectorModal = () => {
    const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([])
    const [loading, setLoading] = useState(false)
    const [filters, setFilters] = useState<GetPaginatedWithPokemonFilter>({
        take: 20
    })
    const [pokemonsSelected, setPokemonsSelected] = useState<number[]>([])
    useEffect(() => {
        setLoading(true)
        getPokemons(filters)
            .then((data) => {
                setPokemonsList(data.result)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [filters])
    const { delayFunction } = useDelayFunction()
    const onSearch = (name: string) =>{
        delayFunction(()=>{
            setFilters((prev)=>({...prev, name}))            
        })
    }
    
    const onChange = (values:number[]) =>{
        if(filters.name) setFilters((prev)=>({...prev, name:undefined}))
        setFilters((prev)=>({...prev, name:undefined}))
        setPokemonsSelected(values)
    }
  return { pokemonsList, loading, onSearch, onChange, pokemonsSelected}
}
