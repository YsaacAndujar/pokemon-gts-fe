import { Card, Flex } from "antd"
import { RequestCardProps } from "./RequestCardProps"

export const RequestCard = ({tradeRequest, width, onClick}: RequestCardProps ) => {
  return (
    <Card
      style={{
        width: width || '350px',
      }}
      hoverable={!!onClick}
      onClick={() => { onClick?.(tradeRequest) }}
      title={`${tradeRequest.collection.pokemon.name} for ${tradeRequest.trade.collection.pokemon.name}`}
      cover={
        <Flex justify='center' gap='10px' align='center' wrap style={{paddingTop:'10px', display:'flex'}}>
          <img alt={tradeRequest.collection.pokemon.name} src={tradeRequest.collection.pokemon.sprite} style={{ width: '150px',  }} />
          <img alt={tradeRequest.trade.collection.pokemon.name} src={tradeRequest.trade.collection.pokemon.sprite} style={{width: '150px', }} />
        </Flex>
      }
    >

    </Card>
  )
}
