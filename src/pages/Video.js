import React,{ useRef, useState } from 'react';
import VideoFooter from "./components/footer/VideoFooter"
import VideoSiderbar from "./components/sidebar/VideoSiderbar"
import "./Video.css"

function Video({likes, messages, shares, name, description, music, url}) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart(){

      /*  if(play == false){
            videoRef.current.play()
            setPlay(true)
        }
        if(play == true){
            videoRef.current.pause()
            setPlay(false)
        }
        */
       
        if(play){
            videoRef.current.pause()
            setPlay(false)
        }  else {
            videoRef.current.play()
            setPlay(true)
        }
    }

  return (
    <div className='video'>
       
        <video className='video__player'
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}>
        </video>
        <VideoSiderbar 
        likes={likes}
        messages={messages}
        shares={shares}
        
        />
        <VideoFooter 
        name={name}
        description={description}
        music={music}
        />
    </div>
  )
}

export default Video