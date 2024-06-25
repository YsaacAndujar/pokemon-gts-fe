import { Descriptions, Flex } from "antd"
import { TypeBadge } from "components/TypeBadge/TypeBadge"
import { Pokemon } from "interfaces/pokemon"

export const PokemonDetails = ({pokemon, showTrade}:{pokemon:Pokemon, showTrade?: boolean}) => {
  const items = [
    {
      key: 1,
      label: 'Id',
      children: pokemon.id,
    },
    {
      key: 2,
      label: 'Name',
      children: pokemon.name,
    },
    {
      key: 6,
      label: 'Types',
      children: (
        <Flex wrap justify='center'>
          {pokemon.types?.map((type, idx) => (
            <TypeBadge key={idx} type={type.name} />
          ))}
        </Flex>
      ),
    },
  ];

  if (showTrade) {
    items.push({
      key: 7,
      label: 'In trade?',
      children: !!pokemon.trade? 'Yes' : 'No',
    });
  }
  return (
    <Flex wrap gap='50px' justify='center'>
        <img src={pokemon.sprite} alt={pokemon.name} style={{width:'300px'}}/>
        <Descriptions bordered layout="horizontal"
        column={1} items={items} />
    </Flex>
  )
}
