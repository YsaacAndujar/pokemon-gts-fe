import { Tabs } from "antd";
import { useLocation } from "react-router-dom";
import { RequestsForMeList, RequestsIMadeList } from "../components";

export const RequestsScreen = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultActiveKey = searchParams.get('tab') || '1';
  return (
    <Tabs
    defaultActiveKey={defaultActiveKey}
    items={[
      {
        label: 'Requests I made',
        key: '1',
        children: <RequestsIMadeList />
      },
      {
        label: 'Requests for me',
        key: '2',
        children: <RequestsForMeList />,
      },
    ]}
  />
  )
}
