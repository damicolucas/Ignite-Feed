import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/damicolucas.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas D'Amico</strong>
            <span>Front-end developer</span>
          </div>
        </div>

        <time dateTime="2023-23-11 20:13:30" title="2023-23-11 20:13:30">Publicado há 2h</time>
      </header>

      <div className={styles.content}> 
        <p>Olha só o conteúdo desse post</p>
        <p>bom demais</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste dolorem ex. Quidem in, suscipit voluptatibus labore, aspernatur illo voluptate fugiat dolorum id non cum nobis ex sint libero veritatis.</p>
      </div>
    </article>
  )
}