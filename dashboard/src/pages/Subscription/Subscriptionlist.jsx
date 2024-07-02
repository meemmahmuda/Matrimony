import React from 'react'
import {useNavigate} from 'react-router-dom'


  const Subscriptionupdate = () => {
    const navigate = useNavigate(); {
  return (
    <div style={{padding:"40px 20px"}}>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">User Id</th>
            <th scope="col">Type</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th>Action</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
            <button onClick={()=>navigate("subscriptionupdate")} className="btn btn-success" >Update</button>
            </td>
            <td>
            <button className="btn btn-danger" >Delete</button>
            </td>
           
            </tr>
        </tbody>
        </table>

    </div>
  )
}
  }

export default Subscriptionupdate
