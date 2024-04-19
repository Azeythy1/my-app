import './Dados.modeule.css'


export function Dados(props){
return(

    <>  
  <table className='table' border={2}>

 
    <tr>
    <td>Nome:{props.nome}</td>
    
    <td>CPF:{props.cpf}</td>
    <td>CEL:{props.cel}</td>
    <td>END:{props.end}</td>
    <td>CEP:{props.cep}</td>
    <td>CIDADE:{props.cidade}</td>
    <td>MODELO:{props.modelo}</td>
    <td>COR:{props.cor}</td>
    <td>FORMA DE PAGAMENTO:{props.f_pag}</td>

    </tr>
  </table>

    
    
    </>
)



}