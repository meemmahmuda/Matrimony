import "./Navbar.scss";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className=" navbar" style={{display:"flex", width:"100%", position:"sticky", top:"0", backgroundColor:"white"}}>
      <div className="container" style={{width:"35%"}}>
        <Link to="/" style={{ fontSize: 30, color:"#0866ff", textDecoration:"none", fontWeight:"bold" }}>Matrimony.Com</Link>
      </div>

      <div className="container" style={{width:"35%", display:"flex", justifyContent:"flex-end"}}>
        <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <AccountCircleOutlinedIcon/>
        </a>
            
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Log out</a></li>
        </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar
