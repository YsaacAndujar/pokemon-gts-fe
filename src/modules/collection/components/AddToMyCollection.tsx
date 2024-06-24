import { Typography } from "antd";
import { PokemonFilter, PokemonList } from "components";
import { usePokemonList } from "../hooks";
const { Title, } = Typography;

export const AddToMyCollection = () => {
  const { setFilters, pokemonsListResponse:{ result } } = usePokemonList()
  return (
    <>
      <Title level={3}>Pokemons</Title>
      <PokemonFilter onSearch={(params) =>{
        setFilters((prev) => ({...prev, ...params}))
      }}/>
      <PokemonList pokemons={result} />
    </>
  )
}
