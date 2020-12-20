import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://transparentworld.org">TransparentWorld!</a>
        </h1>

        <div>
        Text Homepage... Updated
        </div>
      </main>

      <footer className={styles.footer}>
        <div>Don&#39;t Worry!</div>
      </footer>
    </div>
  )
}
