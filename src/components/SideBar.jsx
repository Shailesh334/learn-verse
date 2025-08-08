import React from 'react'
import Topic from './Topic'
import { img_urls } from '../utils/constants';
const SideBar = () => {
  const topics = [ "Home" , "React Js" ,"Tailwind " ,"Node Js" ,"Next Js" ,"Flutter" , "AI" , " Github" ];

  return (
    <div className='w-[15%] p-4'>
      <h1 className='text-gray-700 font-semibold text-lg py-2'> Learn </h1>
      <ul >
        {
          topics.map((topic,index) => <Topic key={topic} name={topic} icon={img_urls[index]}/> )
        }    
      </ul>
     
      <h1 className='text-gray-700 font-semibold text-lg py-2'> Channels </h1>
   
    </div>
  )
}

export default SideBar
