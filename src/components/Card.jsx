// import styles from './Card.module.css'

export function Card(dados){
    return(
        <>
              <div>
            <p>{dados.nome}</p>
            <p>{dados.id}</p>
          </div>  
        </>
    )
}