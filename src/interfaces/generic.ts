export interface GenericPaginated {
    page?: number,
    take?: number
}

export interface GenericPaginatedResponse<T> {
    result: T[]
    total: number
}