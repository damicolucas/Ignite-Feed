import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Comment ({ content, onDeleteComment }) {
  function handleDelete () {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/damicolucas.png" alt='' hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.authorAndTime}>
            <div>
              <strong>Lucas D'Amico</strong>
              <time title='22 de Novembro às 08:13h'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário' onClick={handleDelete}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}