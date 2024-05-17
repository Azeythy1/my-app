import'./App.css'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Card } from './components/Card'
// import CheckList from './components/CheckList'
function App() {
  
  return (
  <div className='mainn'>
    <Header/>

    <div className='main'>
      <Menu/>
    <div className="body">
      <button onClick={''}>Pesquisar</button>
      <input type="search" placeholder='Pesquisa rápida'/>  
    </div>
    <div className="Post">

    <div className='containerPost'>
        <Card 
          id="1"
          data={Date()}
          nome='Flavia Ribeiro'
          conteudo="Note 8 pro 64gb+6gb"
          valor="R$750,00" 
          pagamento="PIX"
          status="Pago"/>

    </div>
        <div className='containerPost'>
        <Card 
          id="1"
          data={Date()}
          nome='Flavia Ribeiro'
          conteudo="Note 8 pro 64gb+6gb"
          valor="R$750,00" 
          pagamento="PIX"
          status="Pago"/>

    </div>
    </div>
 
    </div>
  </div>
    )
}

export default App
