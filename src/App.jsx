import'./App.css'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Card } from './components/Card'
import CheckList from './components/CheckList'
function App() {
  
  return (
  <div className='mainn'>
    <Header/>

    <div className='main'>

    <Menu/>
    <div className="body">
     
      <button onClick={''}>Pesquisar</button>
      <input type="search" />
      
      
        
          
      
    </div>
    <div className='container'>
      <CheckList/>  

      <button >Atualizar</button>

    

    </div>
<div className='containerPost'>
        <Card 
nome='Rober'
conteudo="Não acho isso legal"/>

</div>
  </div>
    </div>
    )
}

export default App
