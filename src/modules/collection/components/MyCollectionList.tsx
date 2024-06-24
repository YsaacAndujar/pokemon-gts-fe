import { Pagination, Row, Typography } from "antd";
import { PokemonFilter, PokemonList } from "components";
import { useMyCollectionList } from "../hooks/useMyCollectionList";
const { Title, } = Typography;

export const MyCollectionList = () => {
  const { setFilters, pokemonsListResponse: { result, totalEntities }, onClickPokemon } = useMyCollectionList()
  return (
    <>
      <Title level={3}>My colection</Title>
      <PokemonFilter onSearch={(params) => {
        setFilters((prev) => ({ ...prev, ...params }))
      }} />
      <PokemonList pokemons={result.map((collection) => ({
        ...collection.pokemon,
        collection
        }))} 
        onClick={onClickPokemon}/>
      <Row justify="end">
        <Pagination
        onChange={(page, take) =>{
          setFilters((prev)=> ({...prev, take, page}))
        }}
        showSizeChanger
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
