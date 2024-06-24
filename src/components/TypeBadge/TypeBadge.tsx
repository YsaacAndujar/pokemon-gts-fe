import './TypeBadge.scss'
export const TypeBadge = ({type}:{type:string}) => {
  return (
    <div className={`pkm-type ${type}`}>
        <span>{type}</span>
    </div>
  )
}