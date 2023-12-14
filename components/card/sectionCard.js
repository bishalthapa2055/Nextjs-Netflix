import React from 'react'
import Card from './card'
import styles from "./sectionCard.module.css"
const SectionCard = (props) => {
    const {title ,videos} = props ;
    console.log(videos)
  return (
    <>
    <section className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.cardWrapper}> 
        {videos.map((item , id) =>(

          <Card key={id} imageUrl={item.imgUrl} size = "large" />
            
        )
          )}
        </div>
    </section>
    </>
  )
}

export default SectionCard