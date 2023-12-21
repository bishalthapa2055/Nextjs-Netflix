import { useRouter } from 'next/router'
import React from 'react'
import Modal from 'react-modal';
import styles from "../../styles/video.module.css"

Modal.setAppElement('#__next ');

const Video = () => {
    const router = useRouter()
    console.log(router.query.videoId)
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
      <h1> here is modal </h1>
    </div>
     
    </Modal>
  </div>
    </>
  )
}

export default Video