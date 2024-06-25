import { TradeRequest } from "interfaces/pokemon"
import { ReactElement } from "react"

export interface RequestCardProps {
    tradeRequest:TradeRequest
    width?: string
    children?: ReactElement | ReactElement[]
}