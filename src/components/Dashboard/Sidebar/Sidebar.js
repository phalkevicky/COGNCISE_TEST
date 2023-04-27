import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import logo from '../../../assets/images/logo.svg'
import agents from '../../../assets/images/agents.svg'
import articles from '../../../assets/images/articles.svg'
import contact from '../../../assets/images/contact.svg'
import idea from '../../../assets/images/idea.svg'
import overview from '../../../assets/images/overview.svg'
import overviewunactive from '../../../assets/images/overviewunactive.svg'
import setting from '../../../assets/images/setting.svg'
import subscript from '../../../assets/images/subscript.svg'
import ticket from '../../../assets/images/ticket.svg'
import ticketactive from '../../../assets/images/ticketactive.svg'

const Sidebar = ({sidebardata,setsidebardata}) => {

  const [isActive, setisActive] = useState(0)

  useEffect(() => {
    
    if (isActive == 0) {
      setsidebardata("Overview")
    }else if(isActive == 1){
      setsidebardata("Tickets")

    }
  
  }, [isActive])
  

  return (
    <div className='sidebar_wrap'>
      <div className='sidebar_logo'>
        <img src={logo} alt="logo" />
        <span>Dashboard Kit</span>
      </div>

      <div className='sidebar_contain'>
        <div onClick={() => { setisActive(0)}} className={isActive == 0 ? 'isactive sidebar_textimg' : 'isnotactive sidebar_textimg'}>
          <img src={isActive == 0 ? overview : overviewunactive} alt="overview" />
          <span>Overview</span>
        </div>

        <div onClick={() => { setisActive(1) }} className={isActive == 1 ? 'isactive sidebar_textimg' : 'isnotactive sidebar_textimg'}>
          <img src={isActive == 1 ? ticketactive : ticket} alt="Tickets" />
          <span>Tickets</span>
        </div>

        <div className='isnotactive sidebar_textimg'>
          <img src={idea} alt="Ideas" />
          <span>Ideas</span>
        </div>

        <div className='isnotactive sidebar_textimg'>
          <img src={contact} alt="Contacts" />
          <span>Contacts</span>
        </div>

        <div className='isnotactive sidebar_textimg'>
          <img src={agents} alt="Agents" />
          <span>Agents</span>
        </div>

        <div className='isnotactive sidebar_textimg'>
          <img src={articles} alt="Articles" />
          <span>Articles</span>
        </div>

      </div>

      <div className='sidebar_secondcontain'>
        <div className='isnotactive sidebar_textimg'>
          <img src={setting} alt="Settings" />
          <span>Settings</span>
        </div>

        <div className='isnotactive sidebar_textimg'>
          <img src={subscript} alt="Subscription" />
          <span>Subscription</span>
        </div>
      </div>

    </div>
  )
}

export default Sidebar