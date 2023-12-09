import Banner from '@/components/banner/banner'
import Head from 'next/head'
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
    <div >

      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.netflixLogo}>Netflix</h1>
      <Banner title ="Japan" subtitle ="East Coast of Asia" imageUrl  = "/statics/p1.jpg"  />
    </div>
    </>
  )
}