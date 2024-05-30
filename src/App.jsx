import'./App.css'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Card } from './components/Card'
import { Pesquisa } from './components/Pesquisa'

function App() {
  
  return (
  <div className='mainn'>
    <Header/>
    <Menu/>
    <Pesquisa/>
    
    <div className="body">

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
          id="2"
          data={Date()}
          nome='Claudia Rocha'
          conteudo="Note 8 pro 64gb+6gb"
          valor="R$750,00" 
          pagamento="PIX"
          status="Pago"/>

        </div>
        <div className='containerPost'>
        <Card 
          id="3"
          data={Date()}
          nome='Ludimila'
          conteudo="Note 8 pro 64gb+6gb"
          valor="R$750,00" 
          pagamento="PIX"
          status="Pago"/>

    </div>
        <div className='containerPost'>
          <Card 
          id="4"
          data={Date()}
          nome='Carlos'
          conteudo="Note 8 pro 64gb+6gb"
          valor="R$750,00" 
          pagamento="PIX"
          status="Pago"/>

        </div>
    
    </div>
 
    </div>
  
    )
}

export default App
