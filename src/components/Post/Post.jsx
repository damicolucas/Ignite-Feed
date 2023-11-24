import React from 'react'
import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = React.useState(['Muito bom, parabéns!!'])
  const [newComment, setNewComment] = React.useState('')
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const contentTypes = {
    p: (child) => <p key={child.content}>{child.content}</p>,
    a: (child) => <a key={child.content} href={child.href}>{child.content}</a>,
  }

  function handleCreateNewComment (event) {
    event.preventDefault()
    setComments(prev => [...prev, newComment])
    setNewComment('')
  }

  function handleNewCommentChange (event) {
    setNewComment(event.target.value)
  }

  function deleteComment (commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={publishedAt.toISOString()} title={publishedDateFormated}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}> 
        {content.map((line) => contentTypes[line.type](line))}
      </div>
      <form className={styles.comentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea name='newComment' placeholder='Deixe um comentário' onChange={handleNewCommentChange} value={newComment} />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => <Comment content={comment} key={comment} onDeleteComment={deleteComment} />)}
      </div>
    </article>
  )
}