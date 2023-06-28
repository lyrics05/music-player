import React from 'react'
import "../sidebar/sidebar.css"
import SidebarButton from './SidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { useEffect, useState } from 'react';
import apiClient from '../../spotify';


const Sidebar = () => {

  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      console.log(response)
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className='sidebarContainer'>
      <img className='profile-img' src={image} alt="" />
       <div>
          <SidebarButton tittle="feed" to= "/feed" icon={<MdSpaceDashboard/>}/>
     
          <SidebarButton  tittle="player" to= "/player" icon={<FaPlay/>}/>
         
          <SidebarButton  tittle="library" to= "/" icon={<IoLibrary/>}/>
       </div>
      
    </div>
  )
}

export default Sidebar