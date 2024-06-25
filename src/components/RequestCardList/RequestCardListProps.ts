import { TradeRequest } from "interfaces/pokemon"

export interface RequestCardListProps {
    tradeRequests:TradeRequest[]
    onClick?: (request: TradeRequest) => void
}