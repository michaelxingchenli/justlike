import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JustLike Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.header}>
          <img src="img/logo.png" />
          <span>
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">中文</a>
          </span>
        </div>
      </header>

      <main className={styles.main}>
        <div>This is a video</div>
        <div>This is a intro</div>        
      </main>

      <footer className={styles.footer}>
      <div class="row">
					 <div class="col-md-8 offset-md-2 col-sm-12 offset-md-0">		<div class="footer-social">
			<div class="footer-social-icons"><a target="_blank" href="mailto:justlikemedialtd@gmail.com" title="email"><i class="fa fa fa-envelope-o"></i></a><a target="_blank" href="https://youtu.be/qc43tBGvSto" title="youtube"><i class="fa fa fa-youtube-square"></i></a></div>		</div>
		</div>				</div>

    <div class="site-info">
            <div class="container">
                                MICRO FILM | ADVERTISING | TV SHOW | EVENT GALA | VLOG            </div>
        </div>
      </footer>
    </div>
  )
}
