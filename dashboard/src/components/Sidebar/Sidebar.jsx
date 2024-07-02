import React from 'react'
import "./Sidebar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"


const Sidebar = () => {
  return (
    <div className='container' style={{backgroundColor:"#dfe4ea", paddingLeft:"70px", paddingRight:"20px", height:"100vh", position:"sticky", top:"0"}}>
      <ul>
        <li>
            <Link to="userlist" style={{textDecoration:"none", color:"black"}}>
            <span>Users</span>
            </Link>
        </li>
        <li>
            <Link to="profilelist" style={{textDecoration:"none",  color:"black"}}>
            <span>Profiles</span>
            </Link>
        </li>
        <li>
            <Link to="photolist" style={{textDecoration:"none", color:"black"}}>
            <span>Photos</span>
            </Link>
        </li>
        <li>
            <Link to="preferencelist" style={{textDecoration:"none", color:"black"}}>
            <span>Preferences</span>
            </Link>
        </li>
        <li>
            <Link to="matchlist" style={{textDecoration:"none", color:"black"}}>
            <span>Matches</span>
            </Link>
        </li>
        <li>
            <Link to="messagelist" style={{textDecoration:"none", color:"black"}}>
            <span>Messages</span>
            </Link>
        </li>
        <li>
            <Link to="subscriptionlist" style={{textDecoration:"none", color:"black"}}>
            <span>Subscripton</span>
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
