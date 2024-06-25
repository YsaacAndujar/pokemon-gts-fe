import { Pokemon } from "interfaces/pokemon"
import { useMemo } from "react"

export const useGetPokemonState = (pokemon: Pokemon) => {
    
    const state = useMemo((): string=>{
        if(pokemon.tradeRequest){
          return 'In Request'
        }
        if(pokemon.trade){
          return 'In Trade'
        }
        return ''
      },[pokemon])
    return  { state }
}
