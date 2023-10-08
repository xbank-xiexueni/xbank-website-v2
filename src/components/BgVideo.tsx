import { useEffect } from 'react'
import React from 'react'
const BgVideo = () => {
  function playBg() {
    if (window) {
      const bgVideo: any = window.document.getElementById('bg-video')
      if (bgVideo) {
        bgVideo.play().catch((e: any) => {
          console.log('视频不能自动播放', e)
        })
      }
    }
  }
  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', playBg)
    }
    return () => {
      window.removeEventListener('scroll', playBg)
    }
  }, [])
  return (
    <video
      id='bg-video'
      className='sun-light-video'
      src='/videos/sun.mp4'
      autoPlay={true}
    />
  )
}

export default BgVideo
