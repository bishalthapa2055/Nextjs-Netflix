import Banner from '@/components/banner/banner'
import Head from 'next/head'
import styles from "../styles/Home.module.css"
import Navbar from '@/components/navbar/navbar.jsx'
import Card from '@/components/card/card'
import SectionCard from '@/components/card/sectionCard'
import { getVideos } from '@/lib/videos'

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const disneyVideos =await getVideos("disney trailer")
  // console.log(disneyVideos ,"vidoes")

  const traveVideos =await getVideos("Travel Videos")
  // console.log(traveVideos ,"vidoes")

  const productivityVideos =await getVideos("Productivvity Videos")

  
 
  // Pass data to the page via props
  return { props: { disneyVideos ,  traveVideos , productivityVideos} }
}




export default function Home({disneyVideos ,  traveVideos , productivityVideos }) {

  return (
    <>
    <div >

      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar userName = "testbishalthapa@gmail.com"/>
      <Banner title ="Japan" subtitle ="East Coast of Asia" imageUrl  = "/statics/p1.jpg"  />


      <div className={styles.sectionWrapper}>

      <SectionCard title="Disney" videos ={disneyVideos} size="large" />
      <SectionCard title="Travel" videos ={traveVideos} size ="small" />
      <SectionCard title="Productivity" videos ={productivityVideos}  size= "large" />
      </div>


      {/* <Card imageUrl ="/statics/lion.jpg" size="small"/> */}
      {/* <Card imageUrl ="/statics/lion.jpg" size="medium"/> */}
      {/* <Card imageUrl ="/statics/lion.jpg" size="large"/> */}
    </div>
    </>
  )
}
