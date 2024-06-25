import { Button, Col, Row, Typography } from "antd";
import { PokemonSelectorModal, TradeDetails } from "components"
import { useMyTradeDetails } from "modules/collection/hooks"
import { useParams } from "react-router-dom";
const { Title, } = Typography;

export const MyTradeDetailsScreen = () => {
  const { id } = useParams();
  const { trade, onDelete, onReturn, handleEditBtn, pokemonSelectorOpened, setPokemonSelectorOpened, onEdit } = useMyTradeDetails(id!)
  return (
    <>
    <PokemonSelectorModal 
            open={pokemonSelectorOpened} 
            title="Select what pokemons you want"
            okText="Save"
            onCancel={()=>{
                setPokemonSelectorOpened(false)
            }}
            onOk={onEdit}
            />
      <Title level={2}>My trade details</Title>
      <TradeDetails trade={trade} />
      <Row justify="end" gutter={16} >
                <Col>
                    <Button size="large" danger onClick={onDelete}>
                        Delete
                    </Button>
                </Col>
                <Col>
                    <Button size="large" onClick={onReturn}>
                        Return
                    </Button>
                </Col>
                <Col>
                    <Button size="large" type="primary" onClick={handleEditBtn} >
                        Edit
                    </Button>
                </Col>
            </Row>
    </>
  )
}
