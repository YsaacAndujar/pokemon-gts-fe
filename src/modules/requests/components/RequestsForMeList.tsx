import { Collapse, Flex, Pagination, Row, Typography } from "antd";
import { RequestCard, RequestCardList } from "components";
import { useRequestsForMe } from "../hooks";
const { Title } = Typography

export const RequestsForMeList = () => {
  const { filtersItems, setFilters, requestsResponse: { result, totalEntities }, handleDeclineRequest } = useRequestsForMe()
    return (
        <div>
            <Title level={2}>Requests for me</Title>
            <Collapse ghost items={filtersItems} />
            <RequestCardList tradeRequests={result} >
                <Flex justify='center'>
                    <RequestCard.Button
                    buttonProps={{
                      danger:true
                    }}
                    onClick={handleDeclineRequest}
                    >
                        Decline request
                    </RequestCard.Button>

                </Flex>
            </RequestCardList>
            <Row justify="end">
                <Pagination
                    onChange={(page, take) => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        setFilters((prev) => ({ ...prev, take, page }))
                    }}
                    showSizeChanger
                    defaultCurrent={1}
                    total={totalEntities}
                    style={{ marginTop: '20px' }}
                    defaultPageSize={30}
                    pageSizeOptions={[10, 20, 30, 100]}
                />
            </Row>
        </div>
    )
}
