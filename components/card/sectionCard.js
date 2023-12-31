import React from 'react'
import Card from './card'
import styles from "./sectionCard.module.css"
import Link from 'next/link';
const SectionCard = (props) => {
    const {title ,videos , size} = props ;
    // console.log(videos)
  return (
    <>
    <section className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.cardWrapper}> 
        {videos.map((item , id) =>(
        <Link href={`/video/${item.id}`} key={id}>
          
          <Card key={id} imageUrl={item.imgUrl} size = {size} />
          
          </Link>
          )
          )}
        </div>
    </section>
    </>
  )
}

export default SectionCard