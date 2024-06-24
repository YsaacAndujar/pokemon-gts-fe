import { Button, Col, Row, Typography } from "antd";
import { PokemonDetails } from "components";
import { useParams } from "react-router-dom";
import { useCollectionDetails } from "../hooks/useCollectionDetails";
const { Title, } = Typography;

export const CollectionDetailsScreen = () => {
    const { id } = useParams();
    const { collection, onReturn, onDelete } = useCollectionDetails(id!)
    return (
        <>
            <Title level={2}>Collection details</Title>
            <PokemonDetails pokemon={collection.pokemon} />

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
            </Row>
        </>
    )
}
