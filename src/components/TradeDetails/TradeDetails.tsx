import { Flex, Typography } from "antd";
import { PokemonCard } from "components/PokemonCard/PokemonCard";
import { PokemonDetails } from "components/PokemonDetails/PokemonDetails";
import { Trade } from "interfaces/pokemon";
const { Title, } = Typography;

export const TradeDetails = ({ trade }: { trade: Trade }) => {
  return (
    <div>
      <PokemonDetails pokemon={trade.collection.pokemon} />
      {
        trade.pokemonsWanted.length > 0 && <>
          <Title level={3}>Pokemons wanted</Title>
          <Flex wrap gap='20px'>
            {
              trade.pokemonsWanted.map((pokemon) => <PokemonCard pokemon={pokemon} width="200px" />)
            }
          </Flex>
        </>
      }

    </div>
  )
}
