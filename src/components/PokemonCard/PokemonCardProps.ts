import { Pokemon } from "interfaces/pokemon";

export interface PokemonCardProps {
    pokemon: Pokemon
    onClick?: (id:number) => void
}