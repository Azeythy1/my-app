import styles from './Header.module.css'


export function Header(){
return(

    <>
    <div className={styles.container}>
        <h1 className={styles.header}>
            Eletroinfo Outlet
        </h1>
        <img className={styles.logo} src="../src/img/logo.png" alt="logo" />
    </div>
    </>
)

}