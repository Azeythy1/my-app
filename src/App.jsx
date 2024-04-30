import'./App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
// import { Card } from './components/Card'
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
              id:2
  
    },
  ]);

  return (
  <div>
    <Header/>
    <Menu/>
    <div className="body">
     
      <button>Pesquisar</button>
      <input type="search" />
      
      {dados.map((dados)=>(
        
          <div>
            <p>{dados.nome}</p>
            <p>{dados.id}</p>
          </div>  
          
      ))}
    </div>
  
  </div>
    )
}

export default App
