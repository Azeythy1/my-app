import { Button } from './Button'
import styles from './Menu.module.css' 

export function Menu(){
    return(

        <>
        <div className={styles.menu}>
              <Button  nome="Cliente"/>
              <Button  nome="Nova Os"/>
        </div>
        </>
    )
}  