import { getTypes } from "helpers/collection"
import { Type } from "interfaces/pokemon"
import { useEffect, useState } from "react"

export const usePokemonFilter = () => {
    const [types, setTypes] = useState<Type[]>([])
    
    useEffect(()=>{
        getTypes()
        .then((data)=>{
            setTypes(data)
        })
    },[])

  return { types }
}
