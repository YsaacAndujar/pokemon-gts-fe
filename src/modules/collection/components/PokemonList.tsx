import { Typography } from "antd";
import { PokemonFilter } from "components";
import { usePokemonList } from "../hooks";
const { Title, } = Typography;

export const PokemonList = () => {
  const { setFilters } = usePokemonList()
  return (
    <>
      <Title level={3}>Pokemons</Title>
      <PokemonFilter onSearch={(params) =>{
        setFilters((prev) => ({...prev, ...params}))
      }}/>
    </>
  )
}
