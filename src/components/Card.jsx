import styles from './Card.module.css'

export function Card(dados){
    return(
        <>
        <div className={styles.Card}>
            <h3>{dados.nome}</h3>
            <p>{dados.id}</p>
            <p>{dados.conteudo}</p>
          </div>  
        </>
    )
}