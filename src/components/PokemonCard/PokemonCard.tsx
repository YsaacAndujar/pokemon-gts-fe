import { Card, Flex } from "antd"
import { PokemonCardProps } from "./PokemonCardProps"
import { TypeBadge } from "components"
import './ribbon.css'
import { useGetPokemonState } from "hooks"
import { useMemo } from "react"

export const PokemonCard = ({ pokemon, onClick, showState, width, }: PokemonCardProps) => {
  
  const { state } = useGetPokemonState(pokemon)
  const bgColorRibbon = useMemo(()=>{
    switch(state){
      case 'In Trade':
        return '#8E44AD'
      case 'In Request':
        return '#19EDD9'
      default:
        break
    }
  }, [state])
  return (
    <Card
      style={{
        width: width || '250px',
      }}
      hoverable={!!onClick}
      onClick={() => { onClick?.(pokemon) }}
      title={`#${pokemon.id} - ${pokemon.name}`}
      cover={
        <Flex justify='center'>
          <img alt={pokemon.name} src={pokemon.sprite} style={{ padding: '10px', width: '100%' }} />
          {state && showState && <span 
          className="ribbon"
          style={{backgroundColor:bgColorRibbon}}
          
          >{state}</span>}
        </Flex>
      }
    >
      <Flex wrap justify='center' >
        {
          pokemon.types?.map((type, idx) => <TypeBadge key={idx} type={type.name} />)
        }
      </Flex>

    </Card>
  )
}
