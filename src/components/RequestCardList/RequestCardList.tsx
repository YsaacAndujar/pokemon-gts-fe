import { Flex } from "antd"
import { RequestCardListProps } from "./RequestCardListProps"
import { RequestCard } from "components"

export const RequestCardList = ({ tradeRequests, onClick }: RequestCardListProps) => {
    return (
        <Flex wrap gap="middle" justify='center' style={{ marginBottom: '20px' }}>
            {
                tradeRequests.map((request, idx) => <RequestCard key={idx} tradeRequest={request} onClick={onClick} />)
            }
        </Flex>
    )
}
