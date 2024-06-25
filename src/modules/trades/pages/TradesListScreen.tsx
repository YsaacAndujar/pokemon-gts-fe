import { Tabs } from "antd"
import { GlobalTrades, MyTrades } from "../components"
import { useLocation, useNavigate } from "react-router-dom";

export const TradesScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const defaultActiveKey = searchParams.get('tab') || '1';
  return (
    <Tabs
    defaultActiveKey={defaultActiveKey}
    items={[
      {
        label: 'Global trades',
        key: '1',
        children: <GlobalTrades />
      },
      {
        label: 'My trades',
        key: '2',
        children: <MyTrades />,
      },
    ]}
  />
  )
}
