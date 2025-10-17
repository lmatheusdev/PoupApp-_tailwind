import { Button } from "../Button"
import { IconCurrency } from "../Icons"
import { List } from "../List"
import { ListItem } from "../ListItem"
import { Movements } from "./Movements"

export const FinancialMovements = () => {
  const movements = [
    {cash: "out", name: "Ifood", value: -20, date: "01/10/2024"},
    {cash: "inflow", name: "Salário", value: 1750, date: "05/10/2024"},
    {cash: "out", name: "Papelaria mila", value: -80, date: "03/10/2024"},
    {cash: "out", name: "Magazine Luiza", value: -300, date: "05/10/2024"},
  ]

  return (
    <div>
      <List> 
        {movements.map(mv => ( 
          <ListItem key={mv.name}> 
            <Movements movements={mv}/>
          </ListItem> 
        ))} 
      </List>
      <div className="flex justify-center mb-6">
        <Button>
          <IconCurrency/>
          Adicionar transação
        </Button>
      </div>
    </div>
  ) 
}