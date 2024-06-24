import { Pagination, Row, Typography } from "antd";
import { PokemonFilter, PokemonList } from "components";
import { usePokemonList } from "../hooks";
const { Title, } = Typography;

export const AddToMyCollection = () => {
  const { setFilters, pokemonsListResponse: { result, totalEntities }, onClickPokemon } = usePokemonList()
  return (
    <>
      <Title level={3}>Pokemons</Title>
      <PokemonFilter onSearch={(params) => {
        setFilters((prev) => ({ ...prev, ...params }))
      }} />
      <PokemonList pokemons={result} onClick={onClickPokemon}/>
      <Row justify="end">
        <Pagination
        onChange={(page, take) =>{
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          setFilters((prev)=> ({...prev, take, page}))
        }}
          defaultCurrent={1}
          total={totalEntities}
          style={{ marginTop: '20px' }}
          defaultPageSize={30}
          showSizeChanger
          pageSizeOptions={[10, 20, 30, 100]} 
        />
      </Row>
    </>
  )
}
