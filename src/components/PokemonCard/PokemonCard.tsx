import { Card, Flex } from "antd"
import { PokemonCardProps } from "./PokemonCardProps"
import { TypeBadge } from "components"

export const PokemonCard = ({pokemon, onClick}:PokemonCardProps) => {
  return (
    <Card
    style={{
        width:'250px',
    }}
    hoverable={!!onClick}
    onClick={()=>{onClick?.(pokemon.id)}}
    title={pokemon.name}
    cover={<img alt="example" src={pokemon.sprite} style={{ padding: '10px' }}/>}
    >
        <Flex wrap justify='center' >
        {
            pokemon.types.map((type)=><TypeBadge type={type.name}/> )
        }
        </Flex>
        
    </Card>
  )
}
