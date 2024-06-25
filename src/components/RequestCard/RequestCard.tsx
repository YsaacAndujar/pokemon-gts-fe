import { Card, Flex } from "antd"
import { RequestCardProps } from "./RequestCardProps"
import { RequestCardButton } from "./components"
import { RequestCardContext } from "./requestCardContext"

export const RequestCard = ({tradeRequest, width, children}: RequestCardProps ) => {
  return (
    <Card
      style={{
        width: width || '400px',
      }}
      title={`${tradeRequest.collection.pokemon.name} for ${tradeRequest.trade.collection.pokemon.name}`}
      cover={
        <Flex justify='center' gap='10px' align='center' wrap style={{paddingTop:'10px', display:'flex'}}>
          <img alt={tradeRequest.collection.pokemon.name} src={tradeRequest.collection.pokemon.sprite} style={{ width: '190px',  }} />
          <img alt={tradeRequest.trade.collection.pokemon.name} src={tradeRequest.trade.collection.pokemon.sprite} style={{width: '190px', }} />
        </Flex>
      }
    >
      <RequestCardContext.Provider value={{tradeRequest}}>
        {children}
      </RequestCardContext.Provider>
    </Card>
  )
}

RequestCard.Button = RequestCardButton
