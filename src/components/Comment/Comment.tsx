import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import React from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void
}

export function Comment ({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = React.useState(0)
  function handleDelete () {
    onDeleteComment(content)
  }
   function handleLikeComment () {
    setLikeCount(prev => prev + 1)
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
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}