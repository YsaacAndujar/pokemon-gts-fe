import { Flex } from "antd"
import { PokemonListInterface } from "./PokemonListProps"
import { PokemonCard } from "components"

export const PokemonList = ({pokemons, onClick, showTrade}: PokemonListInterface) => {
    return (
        <Flex wrap gap="middle" justify='center' style={{marginBottom:'20px'}}>
            {
                pokemons.map((pokemon, idx) => <PokemonCard showTrade={showTrade} key={idx} pokemon={pokemon} onClick={onClick}/>)
            }
        </Flex>
    )
}
