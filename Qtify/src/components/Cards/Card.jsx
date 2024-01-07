import React from 'react'
import "./cards.css"
import Tooltip from '@mui/material/Tooltip';

function Card({data,type}){
  const getCard=(type)=>{
    switch (type) {
      case "album":{
        const {follows,title,slug,image,songs}=data
        return (
          <Tooltip title={`${songs.length}songs`} placement='top' arrow>
          <div className='card'>
            <div className='card-img'>
            <img src={image} alt="" height={170} width={159} loading='lazy'/>
            <div className='card-follow-sec'>
              <button className='follow-btn'>{follows} Follows</button>
            </div>
            </div>
            <div className='card-text'>{title}</div>
          </div>
          </Tooltip>
        )
        } 
        case"filterAlbum":{  
          const {title,image,likes}=data;
          return (
          <div className='card'>
          <div className='card-img'>
          <img src={image} alt="" height={170} width={159} loading='lazy'/>
          <div className='card-follow-sec'>
            <button className='follow-btn'>{likes}Likes</button>
          </div>
          </div>
          <div className='card-text'>{title}</div>
        </div>
          )
        } 
      default:{
        return null
      }
       
    }
  }
 return  getCard(type);
}



export default Card
