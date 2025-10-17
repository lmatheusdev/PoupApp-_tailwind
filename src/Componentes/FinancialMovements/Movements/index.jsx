

const formatter = new Intl.NumberFormat('pt-BR', { 
style: 'currency', 
currency: 'BRL', 
}) 


export const Movements = ({ movements }) => {

  const color = movements.cash === "inflow" ? "text-secondary-income" : "text-secondary-expense"

  
  
  return (
    <div className="flex justify-between">
      <div className={`flex flex-col gap-2 font-medium text-[15px]/[120%] ${color}`}>
        <p 
          className=""
        ><strong>{movements.name}</strong></p>
        <p>{formatter.format(movements.value)}</p>
      </div>
      <div>
        <p className="text-neutral-text text-sm leading-5">
          {new Date(movements.date).toLocaleDateString('pt-BR')}
        </p>
      </div>
    </div>
  )
}