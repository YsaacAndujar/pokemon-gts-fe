import { Collapse, Pagination, Row, Typography } from "antd"
import { useGlobalTrades } from "../hooks"
import { PokemonList } from "components"
const { Title } = Typography

export const GlobalTrades = () => {
  const { filtersItems, setFilters, tradesResponse:{result, totalEntities}, onClickPokemon } = useGlobalTrades()
  return (
    <div>
      <Title level={2}>Global trades</Title>
      <Collapse  ghost items={filtersItems} />
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
    </div>
  )
}
