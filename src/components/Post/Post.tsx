import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

interface IContent {
  type: 'p' | 'a';
  content: string;
  href?: string
}

export interface IPost {
  author: IAuthor;
  content: IContent[];
  publishedAt: Date;
}

interface PostProps {
  post: IPost;
}

export function Post({ post : { author, content, publishedAt }} : PostProps) {
  const [comments, setComments] = useState(['Muito bom, parabéns!!'])
  const [newComment, setNewComment] = useState('')
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newComment.length === 0

  const contentTypes = {
    p: (child) => <p key={child.content}>{child.content}</p>,
    a: (child) => <a key={child.content} href={child.href}>{child.content}</a>,
  }

  function handleCreateNewComment (event: FormEvent) {
    event.preventDefault()
    setComments(prev => [...prev, newComment])
    setNewComment('')
  }

  function handleNewCommentChange (event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }
  
  function handleNewCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment (commentToDelete: string) {
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

        <textarea 
          name='newComment' 
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newComment} 
          required 
          onInvalid={handleNewCommentInvalid}
        />
        
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => <Comment content={comment} key={comment} onDeleteComment={deleteComment} />)}
      </div>
    </article>
  )
}