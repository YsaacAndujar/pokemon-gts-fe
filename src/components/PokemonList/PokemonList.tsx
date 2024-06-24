import { Flex } from "antd"
import { PokemonListInterface } from "./PokemonListProps"
import { PokemonCard } from "components"

export const PokemonList = ({pokemons, onClick}: PokemonListInterface) => {
    return (
        <Flex wrap gap="middle" justify='center'>
            {
                pokemons.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon} onClick={onClick}/>)
            }
        </Flex>
    )
}
