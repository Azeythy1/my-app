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
            data-tooltip="Home"
          >
            <FaHome className={styles.icon} />
            <span className={styles.textLabel}>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cliente" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
            data-tooltip="Clientes"
          >
            <FaUsers className={styles.icon} />
            <span className={styles.textLabel}>Clientes</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/checklist" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
            data-tooltip="Checklist"
          >
            <FaClipboardCheck className={styles.icon} />
            <span className={styles.textLabel}>Checklist</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/conferencia" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
            data-tooltip="Conferência"
          >
            <FaHandshake className={styles.icon} />
            <span className={styles.textLabel}>Conferência</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}