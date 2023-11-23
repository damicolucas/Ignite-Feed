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
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/damicolucas.png",
      name: "Lucas D'Amico",
      role: 'Front-end developer'
    },
    publishedAt: new Date('2023-11-23 08:52:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ]
  }
]
export function App() {
  return (
    <div> 
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post, index) => (
            <Post
              key={index}
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

