
import styles from './Menu.module.css' 

export function Button(props){
    return(
        <>
        <button className={styles.btn}>{props.nome}</button>
        </>
    )
}