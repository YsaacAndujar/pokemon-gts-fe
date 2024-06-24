import { Tabs } from "antd"
import { GlobalTrades, MyTrades } from "../components"

export const TradesScreen = () => {
  return (
    <Tabs
    defaultActiveKey="1"
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
