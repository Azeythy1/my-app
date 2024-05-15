import { Button } from './Button'
import styles from './Menu.module.css' 

export function Menu(){
    return(

        <>
        <div className={styles.container}> 
            
            <div className={styles.menu}>
              <Button  nome="Cliente"/>
            </div>
            <div>
              <Button  nome="Nova Os"/>

            </div>
        </div>
        </>
    )
}  