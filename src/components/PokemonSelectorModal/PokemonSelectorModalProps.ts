export interface PokemonSelectorModalProps {
    title?: string
    open?: boolean
    okText?: string
    onOk? : (pokemons: number[] | number) => void
    onCancel? : () => void
    multiple?: boolean
    sourceType?: 'mockup' | 'available'
}