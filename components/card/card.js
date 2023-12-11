import Image from 'next/image';
import React, { useState } from 'react'
import styles from "./card.module.css"
import {motion} from "framer-motion"
import cls from "classnames"


const Card = (props) => {
    const {imageUrl = "./statics/action.jpg" , size = "medium"}  = props    ;
    const [ imgSrc  , setImgSrc] = useState(imageUrl)
    console.log(imageUrl , size)


    const classMap = {
        small : styles.smItem,
        medium : styles.mdItem,
        large : styles.lgItem
    }

    const handleOnError = () =>{
        console.log("srror")
        setImgSrc("./statics/action.jpg")
    }
  return (
   <>
   <div className={styles.container}>

   <motion.div className={cls(styles.imgMotionWrapper  , classMap[size])}  whileHover={{ scale: 1.2 }}>
   <Image src={imgSrc} alt='image' layout='fill' onError={handleOnError} className={styles.cardImg}/>
   </motion.div>
   </div>
   </>
  )
}

export default Card