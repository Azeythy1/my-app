import'./App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Card } from './components/Card'
import CheckList from './components/CheckList'
function App() {
  const [dados, setDados]= useState([

    {
              nome:"Doce",
              modelo:"Xiami 12",
              tipo:"assistencia",
              status:"completo",
              preco:"150",
              id:1,
    },
    {
              nome:"Doce",
              modelo:"Xiami 12",
              tipo:"assistencia",
              status:"completo",
              preco:"150",
              id :2 
  
    },
  ]);

  return (
  <div>
    <Header/>
    <Menu/>
    <div className="body">
     
      <button onClick={''}>Pesquisar</button>
      <input type="search" />
      
      {dados.map((dados)=>(
        
        <Card key="id" dados={dados}/>
          
      ))}
    </div>
    <div className='container'>
      <CheckList/>  
      <button onClick={setDados}>Atualizar</button>

    </div>
  </div>
    )
}

export default App
