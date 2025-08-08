import React from 'react'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import IconBar from './IconBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  const showMenuList = useSelector(store => store.app.showMenuList)

  return (
    <div className='flex'> 

      {showMenuList && <SideBar/>}
      {!showMenuList && <IconBar />}
      <Outlet />
    </div>
  )
}

export default Body
