import { TradeRequest } from "interfaces/pokemon"
import { ReactElement } from "react"

export interface RequestCardListProps {
    tradeRequests:TradeRequest[]
    children?: ReactElement | ReactElement[]
}