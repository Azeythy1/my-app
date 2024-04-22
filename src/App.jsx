import'./App.css'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Card } from './components/Card'
function App() {
  

  return (
    <>
    <Header/>
    <Menu/>
    <div className="body">
     
      <button>Pesquisar</button>
      <input type="search" />
      
      <Card 
        nome="Flavia"
        modelo="Note 13 256+8"
        tipo="Assitencia"
        status="Analise"
        preco="150"
        />
      <Card 
       nome="Flavia"
       modelo="Note 13 256+8"
       tipo="Assitencia"
       status="Analise"
       preco="150"/>
      <Card
       nome="Flavia"
       modelo="Note 13 256+8"
       tipo="Assitencia"
       status="Analise"
       preco="150"/>
      <Card
       nome="Flavia"
       modelo="Note 13 256+8"
       tipo="Assitencia"
       status="Analise"
       preco="150"/>
    </div>




    </>
  )
}

export default App
