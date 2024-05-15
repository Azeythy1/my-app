import styles from './Card.module.css'

export function Card(dados){
    return(
        <>
        <div className={styles.Card}>
            <h3 className='Dnome'>{dados.nome}</h3>
            <p>{dados.id}</p>
            <p className='Dconteudo'>{dados.conteudo}</p>
          </div>  
        </>
    )
}