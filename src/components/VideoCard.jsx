import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({info}) => {
   
    const {snippet , id} = info;
    const { thumbnails , title , channelTitle} = snippet;
  return (
    <Link to={"/watch?v=" + id.videoId}>
    <div className='p-4 my-2 ml-5 w-[400px] hover:shadow-md cursor-pointer'>
      <img alt='thumbnail' src={thumbnails.medium.url} className='w-full rounded-lg'/>
      <h2 className='font-medium mt-2'>{title}</h2>
      <p className='text-sm text-gray-600'>{channelTitle}</p>
    </div>
    </Link>
  )
}

export default VideoCard
