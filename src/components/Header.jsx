import styles from './Header.module.css'
import lua from './img/lua.jpg'
let nome="Eletroinfo Assitência"
export function Header(){
return(

    <div className={styles.container}>
        <h1 className={styles.header}>
            {nome}
        </h1>
        <img className={styles.perfil} src={lua}/>
    </div>
)

}