import Header from "./Containers/Header"
import { Inicio } from "./Containers/Inicio"
import { Sobre } from "./Containers/Sobre"
import { Top } from "./styled"


function App() {

  return (
    <>
    <Top>
    <Header/>
    </Top>
    <Inicio></Inicio>
    <Sobre></Sobre>
    </>
  )
}

export default App
