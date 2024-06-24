import { Card, Flex } from "antd"
import { PokemonCardProps } from "./PokemonCardProps"
import { TypeBadge } from "components"
import './ribbon.css'

export const PokemonCard = ({pokemon, onClick, showTrade}:PokemonCardProps) => {
  return (
    <Card
    style={{
        width:'250px',
    }}
    hoverable={!!onClick}
    onClick={()=>{onClick?.(pokemon)}}
    title={`#${pokemon.id} - ${pokemon.name}`}
    cover={
      <Flex justify='center'>
      <img alt={pokemon.name} src={pokemon.sprite} style={{ padding: '10px', width:'100%' }}/>
      {pokemon.trade && showTrade && <span className="ribbon">In Trade</span>}
      </Flex>
    }
    >
        <Flex wrap justify='center' >
        {
            pokemon.types?.map((type, idx)=><TypeBadge key={idx} type={type.name}/> )
        }
        </Flex>
        
    </Card>
  )
}
