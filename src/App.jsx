import './App.css'
import { useState } from 'react'
import { Menu } from './components/Menu'
import { Card } from './components/Card'
import { Pesquisa } from './components/Pesquisa'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const [cards] = useState([
    {
      id: 1,
      data: new Date().toLocaleDateString('pt-BR'),
      nome: 'João Silva',
      conteudo: "Note 8 pro 64gb+6gb",
      valor: "R$750,00",
      pagamento: "PIX",
      status: "Pago"
    },
    {
      id: 2,
      data: new Date().toLocaleDateString('pt-BR'),
      nome: 'Maria Oliveira',
      conteudo: "Smartphone X3 128gb",
      valor: "R$1.200,00",
      pagamento: "Cartão",
      status: "Pendente"
    }
  ])

  const filteredCards = cards.filter(card => 
    Object.values(card).some(value => 
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return (
    <div className="app-container">
      <Menu />
      
      <main className="main-content">
        <Pesquisa onSearch={setSearchTerm} />
        
        <div className="cards-grid">
          {filteredCards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App