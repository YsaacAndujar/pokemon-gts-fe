import { Card, Flex, Typography } from "antd"
import { HistoryCardProps } from "./HistoryCardProps"
const { Text } = Typography

export const HistoryCard = ({history}:HistoryCardProps) => {
  return (
    <Card
      style={{
        width:  '400px',
      }}
      title={`${history.myPokemon.name} for ${history.hisPokemon.name}`}
      cover={
        <Flex justify='center' gap='10px' align='center' wrap style={{paddingTop:'10px', display:'flex'}}>
          <img alt={history.myPokemon.sprite} src={history.myPokemon.sprite} style={{ width: '190px',  }} />
          <img alt={history.hisPokemon.sprite} src={history.hisPokemon.sprite} style={{width: '190px', }} />
        </Flex>
      }
    >
        <Text>
        Cambiaste tu {history.myPokemon.name} por {history.hisPokemon.name}

        </Text>
    </Card>
  )
}
