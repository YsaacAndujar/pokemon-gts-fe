import { HistoryCardProps } from "./HistoryCardProps"

export const HistoryCard = ({history}:HistoryCardProps) => {
  return (
    <div>{history.myPokemon.name}</div>
  )
}
