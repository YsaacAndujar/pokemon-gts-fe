import { Tabs } from "antd"
import { MyCollectionList, PokemonList } from "../components"

export const CollectionScreen = () => {
  return (
    <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'My Collection',
        key: '1',
        children: <MyCollectionList />
      },
      {
        label: 'Add to my collection',
        key: '2',
        children: <PokemonList />,
      },
    ]}
  />
  )
}
