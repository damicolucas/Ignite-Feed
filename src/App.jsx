import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/damicolucas.png",
      name: "Lucas D'Amico",
      role: 'Front-end developer'
    },
    publishedAt: new Date('2023-11-23 08:52:00'),
    content: [
      { type: 'p', content: 'Fala galeraa 👋' },
      { type: 'p', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'a', content: 'jane.design/doctorcare', href: 'https://www.jane.design/doctorcare' },
    ]
  },
]
export function App() {
  return (
    <div> 
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

