import { CollapseProps } from "antd";
import { PokemonFilter } from "components";
import { LoadingContext } from "context/loading";
import { getRequestsIMade } from "helpers/trades";
import { GenericPaginatedResponse } from "interfaces/generic";
import { GetPaginatedGlobalTradesFilter, TradeRequest } from "interfaces/pokemon";
import { useContext, useEffect, useState } from "react";

export const useRequestIMadeList = () => {
    const [requestsResponse, setRequetsResponse] = useState<GenericPaginatedResponse<TradeRequest>>({
      result: [],
      totalEntities: 0
  })
    const filtersItems: CollapseProps['items'] = [
        {
          key: '1',
          label: 'Pokemon I offered filter',
          children: PokemonFilter({
            onSearch:((params) =>{
                setFilters((prev):GetPaginatedGlobalTradesFilter => ({ ...prev, myPokemon: params }))
            })
          })
        },
        {
          key: '2',
          label: 'Pokemon they have filter',
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
    getRequestsIMade(filters)
        .then((data) => {
          setRequetsResponse(data)
        })
        .finally(() => {
            setLoading(false)
        })
}, [filters])

const handleDeleteRequest = () =>{

}

return { setFilters, filters, requestsResponse, filtersItems, handleDeleteRequest }
}