import { FiSearch } from 'react-icons/fi'
import styles from './Pesquisa.module.css'

export function Pesquisa({ onSearch }) {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Buscar por cliente, aparelho, OS ou status..."
          onChange={(e) => onSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>
    </div>
  )
}