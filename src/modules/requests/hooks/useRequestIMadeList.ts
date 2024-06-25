import { CollapseProps } from "antd";
import { PokemonFilter } from "components";
import { LoadingContext } from "context/loading";
import { deleteRequest, getRequestsIMade } from "helpers/trades";
import { GenericPaginatedResponse } from "interfaces/generic";
import { GetPaginatedGlobalTradesFilter, TradeRequest } from "interfaces/pokemon";
import { useCallback, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { showModal } from "utils/modal";

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
const loadRequestIMade = useCallback(() =>{
  setLoading(true)
  getRequestsIMade(filters)
      .then((data) => {
        setRequetsResponse(data)
      })
      .finally(() => {
          setLoading(false)
      })
},[])
useEffect(() => {
  loadRequestIMade()
}, [filters, loadRequestIMade])


const handleDeleteRequest = (request:TradeRequest) =>{
  Swal.fire({
    title: "Are you sure you want to delete this request that you made?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      onDeleteRequest(request)
    }
  });
}
const onDeleteRequest = (request:TradeRequest) =>{
  setLoading(true)
  deleteRequest(request.id)
  .then(()=>{
      showModal({title: 'Request deleted', text:'Request deleted successfully', type:'success'})
      loadRequestIMade()
  })
  .finally(()=>{
      setLoading(false)
  })
}

return { setFilters, filters, requestsResponse, filtersItems, handleDeleteRequest }
}