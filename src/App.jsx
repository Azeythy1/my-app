import'./App.css'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Card } from './components/Card'
import CheckList from './components/CheckList'
function App() {
  
  return (
  <div className='main'>
    <Header/>
    <Menu/>
    <div className="body">
     
      <button>Pesquisar</button>
      <input type="search" />
      
      
        
        <Card 
          nome='Rober'
          conteudo="Não acho isso legal"/>
          
      
    </div>
      <CheckList/>  
      <button >Atualizar</button>
  </div>
    )
}

export default App
