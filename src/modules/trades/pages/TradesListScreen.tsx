import { Tabs } from "antd";
import { useLocation } from "react-router-dom";
import { GlobalTrades, MyTrades } from "../components";

export const TradesScreen = () => {
  const location = useLocation();
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
