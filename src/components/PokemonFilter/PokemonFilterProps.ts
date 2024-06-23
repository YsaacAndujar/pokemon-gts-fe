import { GetPokemonFilter } from "interfaces/pokemon";

export interface PokemonFilterProps {
    onSearch?: (params: GetPokemonFilter)=> void
    title?: string
}