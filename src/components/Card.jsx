import styles from './Card.module.css'

export function Card(props){
    return(
        <>
    <card className={styles.card}>
        <div className={styles.title}>
             <h2 className={styles.nome}>{props.nome}</h2>
        </div>
        <div className={styles.detalhes}>
            <h4>Modelo:</h4>
                <p>{props.modelo}</p>
        </div>
        <div className={styles.status}>
           <div className={styles.cardStatus}>
            <div className={styles.cardStatus}>
                    <h4>Tipo:</h4>
                <p>{props.tipo}</p>
            </div>
            <div className={styles.cardStatus}>
                <h4>Status:</h4>
                <p>{props.status}</p>
            </div>
           </div> 
           <div className={styles.cardPreco}> 
            <p className={props.preco}></p>
           </div>
        </div>
    </card>
        </>
    )
}