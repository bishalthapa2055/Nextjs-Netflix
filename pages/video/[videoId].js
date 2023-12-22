import { useRouter } from 'next/router'
import React from 'react'
import Modal from 'react-modal';
import styles from "../../styles/video.module.css"

Modal.setAppElement('#__next ');

const Video = () => {
    const router = useRouter()
    console.log(router.query.videoId)

    const video = {
      title :"Hi title",
      publishTime :"1990-90-09",
      description :" Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      channelTitle :"Paramount Pictures",
      viewsCount : 100090
    }
  return (
    <>
    <div className={styles.container}>
    <Modal
      isOpen={true}
      contentLabel='Watch the video'
      onRequestClose={() => router.back()}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div>

      <iframe id="ytplayer" type="text/html" width="100%" height="360"
      src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=1&origin=http://example.com&controls=0&rel=0`}
      frameborder="0"
      className={styles.videoplayer}
      ></iframe>
      <div className={styles.mainModal}>

      <div className={styles.modalBody}>
        <div className={styles.modalBodyLeft}>
          <div className={styles.publishTime}>
            <h4 className={styles.publishTimeModal}> {video.publishTime}</h4>
          </div>
          <div className={styles.title}>
            <h2>{video.title}</h2>
          </div>
          <div className={styles.description}>
            <h3 className={styles.stylesDescription}>{video.description}</h3>
          </div>
        </div>
        <div className={styles.modalBodyRight}>
          <div className={styles.castName}>
            <p className={styles.subText}>
              <span className={styles.infoTextKey}>Cast : </span>
              <span className={styles.channelTitle}>{video.channelTitle}</span>
            </p>
          </div>
          <div className={styles.viewsCount}>
             <p className={styles.subText}>
              <span className={styles.infoTextKey}>ViewsCount : </span>
              <span className={styles.channelTitle}> {video.viewsCount}</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
     
    </Modal>
  </div>
    </>
  )
}

export default Video