import React from 'react'
import { img_urls } from '../utils/constants';
import IconCard from './IconCard';
const IconBar = () => {
  return (
    <div className='pt-1'>
        {
            img_urls.map(url => <IconCard key={url} icon={url}/>)
        }
      
    </div>
  )
}

export default IconBar
