import { NavLink } from 'react-router-dom'
import { 
  FaHome, 
  FaUsers, 
  FaClipboardCheck, 
  FaHandshake 
} from 'react-icons/fa'
import styles from './Menu.module.css'

export function Menu() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.menuList}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
          >
            <FaHome className={styles.icon} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cliente" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
          >
            <FaUsers className={styles.icon} />
            <span>Clientes</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/checklist" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
          >
            <FaClipboardCheck className={styles.icon} />
            <span>Checklist</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/conferencia" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
          >
            <FaHandshake className={styles.icon} />
            <span>Conferência</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}