import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'

const Preferencelist = () => {
    const navigate = useNavigate();
  return (
    <>
    <div style={{padding:"40px 20px"}}>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">User_Id</th>
            <th scope="col">Age Range</th>
            <th scope="col">Gender</th>
            <th scope="col">Location</th>
            <th scope="col">Job</th>
            <th scope="col">Religion</th>
            <th scope="col">Height</th>
            <th>Action</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
            <button onClick={()=>navigate("preferenceupdate")} className="btn btn-success" >Update</button>
            </td>
            <td>
            <button className="btn btn-danger" >Delete</button>
            </td>
           
            </tr>
        </tbody>
        </table>

    </div>
    </>
  )
}

export default Preferencelist
