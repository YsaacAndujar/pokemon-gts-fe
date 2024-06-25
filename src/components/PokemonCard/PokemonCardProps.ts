import { Pokemon } from "interfaces/pokemon";

export interface PokemonCardProps {
    pokemon: Pokemon
    onClick?: (pokemon: Pokemon) => void
    showState?: boolean
    width?: string
}