import { Pagination, Row, Typography } from "antd";
import { PokemonFilter, PokemonList } from "components";
import { usePokemonList } from "../hooks";
const { Title, } = Typography;

export const AddToMyCollection = () => {
  const { setFilters, pokemonsListResponse: { result, totalEntities } } = usePokemonList()
  return (
    <>
      <Title level={3}>Pokemons</Title>
      <PokemonFilter onSearch={(params) => {
        setFilters((prev) => ({ ...prev, ...params }))
      }} />
      <PokemonList pokemons={result} />
      <Row justify="end">
        <Pagination
        onChange={(page, take) =>{
          setFilters((prev)=> ({...prev, take, page}))
        }}
          defaultCurrent={1}
          total={totalEntities}
          style={{ marginTop: '20px' }}
          defaultPageSize={30}
          pageSizeOptions={[10, 20, 30, 100]} 
        />
      </Row>
    </>
  )
}
