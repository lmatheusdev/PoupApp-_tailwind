
export default function DailyBudget({ value }) {

  const formater = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <div className="m-0 text-primary-highlight text-[39px]/[125%] font-bold text-center">
      {formater.format(value)}
    </div>
  )
}