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
  <div className=""> 
    <List> 
      {accounts.map(ac => ( 
      <ListItem key={ac.bank}> 
      <Account account={ac} /> 
      </ListItem> 
      ))} 
    </List> 
    <div className=""/> 
    <div className=""> 
      <Button> 
        <IconWallet /> 
        Adicionar conta 
      </Button> 
    </div> 
  </div> 
) 
}