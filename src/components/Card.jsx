import styles from './Card.module.css'
let nome="Flavia"
let preco=150

export function Card(){
    return(
        <>
    <card className={styles.card}>
        <div className={styles.title}>
             <h2 className={styles.nome}>{nome ? nome: "Cliente sem nome"}</h2>
        </div>
        <div className={styles.detalhes}>
            <h4>Modelo:</h4>
            <p>Poco X4 Pro 256gb+8gb Preto</p>
        </div>
        <div className={styles.status}>
           <div className={styles.cardStatus}>
            <div className={styles.cardStatus}>
                <h4>Tipo:</h4>
                <p>Assitencia</p>
            </div>
            <div className={styles.cardStatus}>
                <h4>Status:</h4>
                <p>Aberta</p>
            </div>
           </div> 
           <div className={styles.cardPreco}> 
            <p className={styles.preco}>R${preco ? preco: "sem preco"}</p>
           </div>
        </div>
    </card>
        </>
    )
}