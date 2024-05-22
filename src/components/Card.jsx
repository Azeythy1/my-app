import styles from './Card.module.css'

export function Card(dados){
    return(
        <>
        <div className={styles.Card}>
            <span className={styles.icons}></span>
            <p className={styles.id}>O. S  Nº :{" "} <strong>{dados.id}</strong></p>
            <br />
            <p><strong>Data: </strong> {dados.data}</p>
            <h3> <strong>Cliente: </strong> {dados.nome}</h3>
            <p> <strong>Aparelho: </strong> {dados.conteudo}</p>
            <p><strong>Valor: </strong> {dados.valor}</p>
            <p><strong>Pagamento: </strong> {dados.pagamento},</p>
            <p><strong>Status: </strong> {dados.status}</p>
          </div>  
        </>
    )
}