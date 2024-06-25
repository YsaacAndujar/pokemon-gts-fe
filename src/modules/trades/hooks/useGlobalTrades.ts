import { CollapseProps } from "antd";
import { PokemonFilter } from 'components';
import { LoadingContext } from 'context/loading';
import { getGlobalTrades } from 'helpers/trades';
import { GenericPaginatedResponse } from 'interfaces/generic';
import { GetPaginatedGlobalTradesFilter, Pokemon, Trade } from 'interfaces/pokemon';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGlobalTrades = () => {
    const [tradesResponse, setTradesResponse] = useState<GenericPaginatedResponse<Trade>>({
      result: [],
      totalEntities: 0
  })
    const filtersItems: CollapseProps['items'] = [
        {
          key: '1',
          label: 'Pokemon I want filters',
          children: PokemonFilter({
            onSearch:((params) =>{
                setFilters((prev):GetPaginatedGlobalTradesFilter => ({ ...prev, myPokemon: params }))
            })
          })
        },
        {
          key: '2',
          label: 'Pokemon they want filters',
          children: PokemonFilter({
            onSearch:((params) =>{
                setFilters((prev):GetPaginatedGlobalTradesFilter => ({ ...prev, theirPokemon: params }))
            })
          })
        },
      ];
const { setLoading } = useContext(LoadingContext)
const [filters, setFilters] = useState<GetPaginatedGlobalTradesFilter>({
    take: 30
})
useEffect(() => {
    setLoading(true)
    getGlobalTrades(filters)
        .then((data) => {
            setTradesResponse(data)
        })
        .finally(() => {
            setLoading(false)
        })
}, [filters])
const navigate = useNavigate();

const onClickPokemon = (pokemon: Pokemon) => {
    console.log(pokemon)
}
return { setFilters, filters, tradesResponse, onClickPokemon, filtersItems }
}
