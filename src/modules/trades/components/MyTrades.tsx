import { Pagination, Row, Typography } from "antd";
import { PokemonFilter, PokemonList } from "components";
import { useMyTrades } from "../hooks/useMyTrades";
const { Title, } = Typography;

export const MyTrades = () => {
    const { setFilters, tradesResponse:{result, totalEntities}, onClickPokemon} = useMyTrades()
    return (
        <>
            <Title level={3}>My trades</Title>
            <PokemonFilter onSearch={(params) => {
                setFilters((prev) => ({ ...prev, ...params }))
            }} />
            <PokemonList pokemons={result.map(({...trade}) => ({
                ...trade.collection.pokemon,
                trade
            }))}
                onClick={onClickPokemon} />
            <Row justify="end">
                <Pagination
                    onChange={(page, take) => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        setFilters((prev) => ({ ...prev, take, page }))
                    }}
                    showSizeChanger
                    defaultCurrent={1}
                    total={totalEntities}
                    style={{ marginTop: '20px' }}
                    defaultPageSize={30}
                    pageSizeOptions={[10, 20, 30, 100]}
                />
            </Row>
        </>)
}
