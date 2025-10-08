import Aside from "./Componentes/Aside"
import Container from "./Componentes/Container"
import Main from "./Componentes/Main"
import SearchInput from "./Componentes/SearchInput"


function App() {
  
  return (
    <Container>
      <Aside/>
      <Main>
        <SearchInput/>
        <div>
  
        </div>
      </Main>
    </Container>
  )
}

export default App
