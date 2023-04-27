import React, { useContext, useState,useEffect } from 'react'
import  Sidebar  from "./Sidebar/Sidebar";
import Header from './Header/Header';
import './Dashboard.css'
import Overview from './Overview/Overview';
import Ticket from './Tickets/Ticket';
import { Context } from '../constant/Context';
import { useNavigate } from 'react-router-dom';
import { Api } from '../constant/Api';

const Dashboard = () => {
  
  const [sidebardata,setsidebardata] = useState();
  const [user,setuser] = useState([]);

  const [isloggedin, setisloggedin] = useContext(Context) //context
  const navigate = useNavigate();


  useEffect(() => {

    if (isloggedin) {

      const fetchData = async ()=>{
        
        try{

          let result
          const res = await fetch(Api.singleUser)
          result = await res.json();
          //console.log("res",result?.data);
          setuser(result?.data)
        } catch (error){
          console.log(error)
        }
      }
      fetchData();

    } else {
     
      navigate('/login')
    }

  }, [])
  

  return (
    <div>
        <Sidebar sidebardata={sidebardata} setsidebardata={setsidebardata}  />
        <Header user={user} sidebardata={sidebardata} />
        <div className='dashboard_data'>
            <div className='dashboard_wrap'>

             {
              sidebardata == "Overview" ? <Overview isActive /> : <Ticket />
             }


            </div>
        </div>
    </div>
  )
}

export default Dashboard