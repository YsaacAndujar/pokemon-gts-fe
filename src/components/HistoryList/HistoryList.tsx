import { Flex } from "antd"
import { HistoryListProps } from "./HistoryListProps"
import { HistoryCard } from "components/HistoryCard/HistoryCard"

export const HistoryList = ({ histories }: HistoryListProps) => {
    return (
        <Flex wrap gap="middle" justify='center' style={{ marginBottom: '20px' }}>
            {
                histories.map((history, idx) => <HistoryCard key={idx} history={history} />)
            }
        </Flex>
    )
}
