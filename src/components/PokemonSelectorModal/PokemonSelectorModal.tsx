import { Modal, Select, Space, Tag } from "antd";
import { PokemonSelectorModalProps } from "./PokemonSelectorModalProps";
import { usePokemonSelectorModal } from "./usePokemonSelectorModal";

export const PokemonSelectorModal = ({ title, open, onOk, onCancel, okText, multiple=true, sourceType}: PokemonSelectorModalProps) => {

  const { pokemonsList, onSearch, onChange, loading, pokemonsSelected, } = usePokemonSelectorModal(open, sourceType)
  return (
    <Modal title={title} open={open} onOk={()=>{
      onOk?.(pokemonsSelected)
    }} onCancel={onCancel} okText={okText}>
      {
        multiple? (
          <Select
      loading={loading}
      allowClear
      showSearch
        mode="multiple"
        value={pokemonsSelected}
        style={{ width: '100%' }}
        placeholder="select the pokemons"
        onSearch={onSearch}
        onChange={onChange}
        options={pokemonsList.map((pokemon) => ({
          ...pokemon,
          value: pokemon.id,
          label: pokemon.name
        }))}
        maxCount={10}
        tagRender={({label, value, onClose}) =>(
          <Tag closable onClose={onClose} color="blue" style={{ margin: '5px' }}>
            #{value} - {label}
          </Tag>
        )}
        filterOption={(() => true)}
        optionRender={({ data }) => (
          <Space>
            <img src={data.sprite} alt={data.name} />
            {data.name}
          </Space>
        )}
      />
        ) : (
          <Select
      loading={loading}
      allowClear
      showSearch
        value={pokemonsSelected}
        style={{ width: '100%' }}
        placeholder="select the pokemon"
        onSearch={onSearch}
        onChange={onChange}
        options={pokemonsList.map((pokemon) => ({
          ...pokemon,
          value: pokemon.id,
          label: pokemon.name
        }))}
        filterOption={(() => true)}
        optionRender={({ data }) => (
          <Space>
            <img src={data.sprite} alt={data.name} />
            {data.name}
          </Space>
        )}
      />
        )
      }
      
    </Modal>
  )
}
