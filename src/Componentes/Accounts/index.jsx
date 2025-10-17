import { Account } from "../Account"
import { Button } from "../Button"
import { IconWallet } from '../Icons'
import { List } from "../List"
import { ListItem } from "../ListItem"

export const Accounts = () => { 
  const accounts = [ 
  { bank: "Anybank", balance: 1200 },
  { bank: "Bytebank", balance: 800 },
  { bank: "Switch Bank", balance: 1800 }
  ];

return ( 
  <div className="flex flex-col h-full"> 
    <List> 
      {accounts.map(ac => ( 
      <ListItem key={ac.bank}> 
      <Account account={ac} /> 
      </ListItem> 
      ))} 
    </List>
    <div className="flex-grow"/>
    <div className="flex justify-center mb-6"> 
      <Button> 
        <IconWallet /> 
        Adicionar conta 
      </Button> 
    </div> 
  </div> 
) 
}