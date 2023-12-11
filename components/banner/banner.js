import React from 'react'
import styles from "./banner.module.css"
import Image from 'next/image';
import { PlayArrowOutlined } from '@mui/icons-material';


const Banner = (props) => {
  const {title ,subtitle , imageUrl } = props ;

  return (
    <>
    <div className={styles.main__container}>

    <div className={styles.leftWrapper}>
      <div className={styles.left}>

        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.subtitle}>{subtitle}</h3>
      <div className={styles.playButton}>
        
        <PlayArrowOutlined  style={{
          cursor :"pointer"
        }}/>

        <button className={styles.buttonClass}> Play Video</button>
      </div>
      </div>
    </div>
    <div className={styles.bannerImage} style={{backgroundImage  :  `url(${imageUrl})` ,width  : "100%" , height :"100%" , position :"absolute" ,backgroundSize :"cover" , opacity : 0.8}} >

    </div>
    </div>
    </>
  )
}

export default Banner