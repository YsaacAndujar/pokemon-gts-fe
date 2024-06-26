import { LoadingContext } from "context/loading"
import { getHistory } from "helpers/history"
import { GenericPaginatedFilter, GenericPaginatedResponse } from "interfaces/generic"
import { History } from "interfaces/pokemon"
import { useContext, useEffect, useState } from "react"


export const useHistory = () => {
    const [historyResponse, setHistoryResponse] = useState<GenericPaginatedResponse<History>>({
        result: [],
        totalEntities: 0
    })
    const [filters, setFilters] = useState<GenericPaginatedFilter>({
        take: 30
    })
const { setLoading } = useContext(LoadingContext)
useEffect(() =>{
    setLoading(true)
    getHistory(filters)
        .then((data) => {
            setHistoryResponse(data)
        })
        .finally(() => {
            setLoading(false)
        })
  },[filters])


  return { setFilters, historyResponse }
}
