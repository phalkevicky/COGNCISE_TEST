import React from 'react'
import './Header.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../../assets/images/logo.svg'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
const Header = ({sidebardata,user}) => {

  const navigate = useNavigate()
  
  // IconStyle

  const iconStyle = {

    color: '#9FA2B4',    
    cursor: 'pointer'
}

  const logout = ()=>{
    navigate('/login')
  }

  return (
    <>
      <div className='header_wrap'>
         <div className='header_subwrap'>
         <div className='header_head'>{sidebardata}</div>
          <div className='header_icons'>
            <div className='header_iconwrap'>
              <NotificationsNoneIcon sx={iconStyle} />
              <SearchIcon sx={iconStyle} />

            </div>
            <div className='header_username'>
              <p >{user?.first_name} {user?.last_name}</p>
              <img style={{borderRadius: '50%'}} width={35} src={user?.avatar} alt="" />
              <Tooltip title="Logout" ><LogoutIcon sx={iconStyle} onClick={logout} /></Tooltip>
            </div>
          </div>
         </div>
      </div>
    </>
  )
}

export default Header