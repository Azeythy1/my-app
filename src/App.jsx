import './App.css'
import { Header } from './components/Header'
import styles from './components/Header.module.css' 
// import { Dados } from './components/dados'

function App() {
  

  return (
    <>
    <Header/>
{/* <div>

   <Dados 
    nome=" Rodrigo"
    cpf="015.852.745-49"
    cel="35 992436519"
    end="RUA MARIA CONCEICÃO N65"
    cep= "37152-000"
    cidade="Varginha"
    modelo="Fone jbl"
    cor="preto"
    f_pag="Pix"
   />
  <Dados 
    nome=" Flavio"
    cpf="015.852.745-49"
    cel="35 991355257"
    end="Av Brasil N605"
    cep= "37152-222"
    cidade="Varginha"
    modelo="Capinha"
    cor="Rosa"
    f_pag="Credito 12x"
   />
</div> */}
<menu className={styles.menu}>
    <button className={styles.btn1}>Nova OS</button>
    <button className={styles.btn2}>Cliente </button>

</menu>
<body className={styles.body}>
   <div className={styles.title}>
      <h2 className={styles.nome}>Otaviano</h2>
   </div>
   <div className={styles.detalhes}>
      <h4>Modelo</h4>
      <p>Poco X4 Pro 256gb+8gb Preto</p>
   </div>
   <div className={styles.status}>
      <h4>Status</h4>
      <p>Aberta</p>
   </div>
</body>




    </>
  )
}

export default App
