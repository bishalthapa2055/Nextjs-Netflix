import { useRouter } from 'next/router'
import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#__next ');

const Video = () => {
    const router = useRouter()
    console.log(router.query.videoId)
  return (
    <>
    <div>VideoId : {router.query.videoId}</div>
    <div>
    <Modal
      isOpen={true}
      contentLabel='Watch the video'
      onRequestClose={() => router.back()}
    >
     <h1> here is modal </h1>
     
    </Modal>
  </div>
    </>
  )
}

export default Video