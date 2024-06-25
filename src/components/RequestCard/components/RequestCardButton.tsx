import { Button, ButtonProps } from "antd"
import { TradeRequest } from "interfaces/pokemon"
import { ReactElement, useContext } from "react"
import { RequestCardContext } from "../requestCardContext"

export const RequestCardButton = ({ buttonProps, children, onClick }: {
    children?: ReactElement | ReactElement[] | string,
    buttonProps?: ButtonProps,
    onClick?: (tradeRequest: TradeRequest, event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}) => {
    const { tradeRequest } = useContext(RequestCardContext)
    return (
        <Button {...buttonProps} onClick={(e) => {
            onClick?.(tradeRequest, e)
        }}>{children}</Button>
    )
}