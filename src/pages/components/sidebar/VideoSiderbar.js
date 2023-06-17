import React, { useState } from 'react'
import "./VideoSiderbar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSiderbar({likes, messages, shares}) {

    const[liked, setLiked] = useState(false)

    function handdleLike(){
        setLiked(!liked)
    }
  return (
    <div className='videoSliderbar'>
        <div 
        className='videoSiderbar_options'
        onClick={handdleLike}
        >
            { liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
            <p>{ liked ? likes + 1 : likes}</p>
        </div>
        <div className='videoSiderbar_options'>
            <ChatIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className='videoSiderbar_options'>
           <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSiderbar