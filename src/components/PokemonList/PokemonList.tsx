import { Flex } from "antd"
import { PokemonListInterface } from "./PokemonListProps"
import { PokemonCard } from "components"

export const PokemonList = ({pokemons, onClick, showState}: PokemonListInterface) => {
    return (
        <Flex wrap gap="middle" justify='center' style={{marginBottom:'20px'}}>
            {
                pokemons.map((pokemon, idx) => <PokemonCard showState={showState} key={idx} pokemon={pokemon} onClick={onClick}/>)
            }
        </Flex>
    )
}
