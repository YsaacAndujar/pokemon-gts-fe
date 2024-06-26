import axios from "axios"
import { GenericPaginatedFilter, GenericPaginatedResponse } from "interfaces/generic"
import { History } from "interfaces/pokemon"

export const getHistory = (params?: GenericPaginatedFilter) => {
    return axios.get<never, GenericPaginatedResponse<History>>('history/', { params })
}