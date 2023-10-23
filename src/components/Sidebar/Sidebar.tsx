import styles from './Sidebar.module.css'

export function Sidebar () {
    return (

        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={styles.cover} />
            <div className={styles.profile}>
                <strong>Lucas D'Amico</strong>
                <span>Front-end developer</span>
            </div>

            <footer>
                <a href="">Editar seu perfil</a>
            </footer>
        </aside>
    )
}