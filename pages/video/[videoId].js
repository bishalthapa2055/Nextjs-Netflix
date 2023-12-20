import { useRouter } from 'next/router'
import React from 'react'

const Video = () => {
    const router = useRouter()
    console.log(router.query.videoId)
  return (
    <div>VideoId : {router.query.videoId}</div>
  )
}

export default Video