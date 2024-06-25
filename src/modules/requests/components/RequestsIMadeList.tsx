import { Collapse, Flex, Pagination, Row, Typography } from "antd";
import { useRequestIMadeList } from "../hooks";
import { RequestCard, RequestCardList } from "components";
const { Title } = Typography

export const RequestsIMadeList = () => {
    const { filtersItems, setFilters, requestsResponse: { result, totalEntities }, handleDeleteRequest } = useRequestIMadeList()
    return (
        <div>
            <Title level={2}>Active requests that I made</Title>
            <Collapse ghost items={filtersItems} />
            <RequestCardList tradeRequests={result} >
                <Flex justify='center'>
                    <RequestCard.Button 
                    buttonProps={{danger:true}} onClick={handleDeleteRequest}>
                        Delete request
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
