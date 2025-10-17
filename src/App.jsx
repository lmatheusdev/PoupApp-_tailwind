import { Accounts } from "./Componentes/Accounts"
import Aside from "./Componentes/Aside"
import Card from "./Componentes/Card"
import Container from "./Componentes/Container"
import DailyBudget from "./Componentes/DailyBudget"
import { FinancialMovements } from "./Componentes/FinancialMovements"
import Main from "./Componentes/Main"
import SavingsStatus from "./Componentes/SavingsStatus"
import SearchInput from "./Componentes/SearchInput"
import Section from "./Componentes/Section"
import Typography from "./Componentes/Typography"


function App() {
  
  return (
    <Container>
      <Aside/>
      <Main>
        <SearchInput/>
        <div>
          <Typography variant="h1">
            Olá, Leandro!
          </Typography>
          <Typography variant="p">
            veja como estão suas finanças hoje.
          </Typography>
        </div>
        <Section>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              <DailyBudget value={250}/>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Progresso da meta financeira:
            </Card.Header>
            <Card.Body>
              <SavingsStatus/>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Movimentações financeiras
            </Card.Header>
            <Card.Body>
              <FinancialMovements/>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Minhas Contas
            </Card.Header>
            <Card.Body>
              <Accounts/>
            </Card.Body>
          </Card>
        </Section>
      </Main>
    </Container>
  )
}

export default App
