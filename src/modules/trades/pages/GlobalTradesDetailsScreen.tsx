import { Button, Col, Row, Typography } from "antd";
import { PokemonSelectorModal, TradeDetails } from "components";
import { useGlobalTradeDetails } from "modules/collection/hooks";
import { useParams } from "react-router-dom";
const { Title, } = Typography;

export const GlobalTradesDetailsScreen = () => {
  const { id } = useParams();
  const { trade, onReturn, handleMakeOffer, pokemonSelectorOpened, setPokemonSelectorOpened, onMakeOffer } = useGlobalTradeDetails(id!)
  return (
    <>
    <PokemonSelectorModal 
            open={pokemonSelectorOpened} 
            multiple={false}
            sourceType="available"
            title="Select what pokemon you want to offer"
            okText="Save"
            onCancel={()=>{
                setPokemonSelectorOpened(false)
            }}
            onOk={onMakeOffer}
            />
      <Title level={2}>Trade details</Title>
      <TradeDetails trade={trade} />
      <Row justify="end" gutter={16} >
                <Col>
                    <Button size="large" onClick={onReturn}>
                        Return
                    </Button>
                </Col>
                <Col>
                    <Button size="large" type="primary" onClick={handleMakeOffer} >
                        Make offer
                    </Button>
                </Col>
            </Row>
    </>
  )
}
