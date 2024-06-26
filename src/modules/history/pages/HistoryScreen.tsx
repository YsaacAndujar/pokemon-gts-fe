import { Pagination, Row, Typography } from "antd";
import { useHistory } from "../hooks/useHistory";
import { HistoryList } from "components";
const { Title } = Typography

export const HistoryScreen = () => {
    const { setFilters, historyResponse: { result, totalEntities }, } = useHistory()
    return (
        <>
            <Title level={2}>Requests for me</Title>
            <HistoryList histories={result}/>
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
        </>

    )
}
