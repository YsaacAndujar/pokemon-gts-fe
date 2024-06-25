import { Pokemon } from "interfaces/pokemon";

export interface PokemonListInterface {
    pokemons: Pokemon[]
    onClick?: (pokemon: Pokemon) => void
    showState? :boolean
}