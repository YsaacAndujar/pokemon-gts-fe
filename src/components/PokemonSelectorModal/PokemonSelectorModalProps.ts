export interface PokemonSelectorModalProps {
    title?: string
    open?: boolean
    okText?: string
    onOk? : (pokemons: number[]) => void
    onCancel? : () => void
}