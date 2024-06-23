import axios from "axios"
import { Type } from "interfaces/pokemon"

export const getTypes = () =>{
    return axios.get<never, Type[]>('pokemon-mockup/types')
}