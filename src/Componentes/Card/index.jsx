
const Card = ({ children }) => {
  return (
    <div className="bg-neutral-surface rounded-3xl flex flex-col"> 
      {children}
    </div>
  )
}

export const CardHeader = ({ children }) => {
  return (
    <div className="bg-neutral-header text-neutral-text text-[20px]/[120%] text-center
    font-bold rounded-t-3xl p-4" > 
      {children}
    </div>
  )
} 

export const CardBody = ({ children }) => {
  return (
    <div className="bg-neutral-surface rounded-[0_0_24px_24px] p-[px] flex flex-col grow"> 
      {children}
    </div>
  )
} 

Card.Header = CardHeader
Card.Body = CardBody

export default Card