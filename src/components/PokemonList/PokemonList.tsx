import { Flex } from "antd"
import { PokemonListInterface } from "./PokemonListProps"
import { PokemonCard } from "components"

export const PokemonList = ({pokemons}: PokemonListInterface) => {
    return (
        <Flex wrap gap="middle" justify='center'>
            {
                pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={()=>{}}/>)
            }
        </Flex>
    )
}
