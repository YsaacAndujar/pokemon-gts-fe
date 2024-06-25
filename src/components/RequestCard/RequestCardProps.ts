import { TradeRequest } from "interfaces/pokemon"

export interface RequestCardProps {
    tradeRequest:TradeRequest
    onClick?: (request: TradeRequest) => void
    width?: string
}