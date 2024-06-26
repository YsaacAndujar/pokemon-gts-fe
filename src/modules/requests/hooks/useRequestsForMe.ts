import { CollapseProps } from "antd";
import { PokemonFilter } from "components";
import { LoadingContext } from "context/loading";
import { acceptRequest, declineRequest, getRequestsForMe } from "helpers/trades";
import { GenericPaginatedResponse } from "interfaces/generic";
import { GetPaginatedGlobalTradesFilter, TradeRequest } from "interfaces/pokemon";
import { useCallback, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { showModal } from "utils/modal";

export const useRequestsForMe = () => {
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
                console.log(params)
                setFilters((prev):GetPaginatedGlobalTradesFilter => ({ ...prev, myPokemon: params }))
            })
          })
        },
        {
          key: '2',
          label: 'Pokemon they offered filter',
          children: PokemonFilter({
            onSearch:((params) =>{
                console.log(params)

                setFilters((prev):GetPaginatedGlobalTradesFilter => ({ ...prev, theirPokemon: params }))
            })
          })
        },
      ];
const { setLoading } = useContext(LoadingContext)
const [filters, setFilters] = useState<GetPaginatedGlobalTradesFilter>({
    take: 30
})
const loadRequestForMe = useCallback(() =>{
  setLoading(true)
  getRequestsForMe(filters)
      .then((data) => {
        setRequetsResponse(data)
      })
      .finally(() => {
          setLoading(false)
      })
},[filters])
useEffect(() => {
    loadRequestForMe()
}, [loadRequestForMe])


const handleDeclineRequest = (request:TradeRequest) =>{
  Swal.fire({
    title: "Are you sure you want to decline this offer?",
            text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      onDeclineRequest(request)
    }
  });
}
const onDeclineRequest = (request:TradeRequest) =>{
  setLoading(true)
  declineRequest(request.id)
  .then(()=>{
      showModal({title: 'Request declined', text:'Request declined successfully', type:'success',
        didClose:()=> loadRequestForMe()
      })
  })
  .finally(()=>{
      setLoading(false)
  })
}
const handleAcceptRequest = (request:TradeRequest) =>{
  Swal.fire({
    title: "Are you sure you want to accept this offer?",
            text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, accept it!"
  }).then((result) => {
    if (result.isConfirmed) {
      onAcceptRequest(request)
    }
  });
}
const onAcceptRequest = (request:TradeRequest) =>{
  setLoading(true)
  acceptRequest(request.id)
  .then(()=>{
      showModal({title: 'Request accepted', text:'Request accepted successfully', type:'success',
        didClose:()=> loadRequestForMe()
      })
  })
  .finally(()=>{
      setLoading(false)
  })
}

return { setFilters, filters, requestsResponse, filtersItems, handleDeclineRequest, handleAcceptRequest }
}