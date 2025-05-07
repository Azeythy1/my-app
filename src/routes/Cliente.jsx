
import {Menu} from '../components/Menu'
import { Pesquisa } from '../components/Pesquisa'



function Cliente() {
    return (
      <div className='mainn'>
      
        <Menu/> 
        <Pesquisa/>
        <body className='body'>
            <div className="Post">
                
                
                <div className="container">

                    <div className="content">
                        <label >NOME:</label>
                        <input type="text" />
                    </div>

                    <div className="content">                      
                        <label >CPF:</label>
                        <input type="text" />
                    </div>

                    <div className="content">                        
                        <label >ENDEREÇO:</label>
                        <input type="text" />
                    </div>
                        
                    <div className="content">                       
                        <label >NUMERO:</label>
                        <input type="text" />
                    </div>

                    <div className="content">                       
                        <label >BAIRRO:</label>
                        <input type="text" />
                    </div>

                    <div className="content">                      
                        <label >CIDADE:</label>
                        <input type="text" />
                    </div>

                </div>
                <div className="actives">
                    
                    <button type="cancel">Cancelar</button>
                    <button type="submit">Salvar</button>
                </div>

                

            </div>
        </body>
        
  
      </div>
    )
  }
  
  export default Cliente