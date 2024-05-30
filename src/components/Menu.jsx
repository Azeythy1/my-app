import { Button } from './Button'
import {Link} from 'react-router-dom'
import styles from './Menu.module.css' 

export function Menu(){
 

    return(

        <>
        <div className={styles.container}> 
            
            <div className={styles.menu}>
                <Link to="/" className={styles.btn}>Home</Link>          
              
            </div>
            <div className={styles.menu}>
              <Link to="/cliente" className={styles.btn}>Clientes</Link>

            </div>
            <div className={styles.menu}>
              <Link to="/checklist" className={styles.btn}>Checklist</Link>

            </div>
            <div className={styles.menu}>
              <Link to="/conferencia" className={styles.btn}>Conferencia</Link>

            </div>
        </div>
        </>
    )
}  