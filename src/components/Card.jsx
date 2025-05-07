import styles from './Card.module.css'
import { FaEdit, FaSave, FaPrint, FaRegFileAlt } from 'react-icons/fa'

export function Card(dados) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <FaRegFileAlt className={styles.docIcon} />
        <h3 className={styles.cardTitle}>Ordem de Serviço</h3>
        <div className={styles.actions}>
          <button className={styles.actionBtn} title="Editar">
            <FaEdit />
          </button>
          <button className={styles.actionBtn} title="Salvar">
            <FaSave />
          </button>
          <button className={styles.actionBtn} title="Imprimir">
            <FaPrint />
          </button>
        </div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Nº OS:</span>
          <span className={styles.infoValue}>#{dados.id}</span>
        </div>
        
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Data:</span>
            <span className={styles.infoValue}>{dados.data}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Cliente:</span>
            <span className={styles.infoValue}>{dados.nome}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Aparelho:</span>
            <span className={styles.infoValue}>{dados.conteudo}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Valor:</span>
            <span className={styles.infoValue}>{dados.valor}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Pagamento:</span>
            <span className={styles.infoValue}>{dados.pagamento}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Status:</span>
            <span className={`${styles.status} ${styles[dados.status.toLowerCase()]}`}>
              {dados.status}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}