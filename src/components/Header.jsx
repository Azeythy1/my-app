import styles from './Header.module.css'
import logo from './img/logo.png'

export function Header(){
  


return(

    <>
    <div className={styles.container}>
        <h1 className={styles.header}>
            Eletroinfo Outlet
        </h1>
        <img className={styles.logo} src={logo} alt="logo" />
    </div>
    </>

)

}

