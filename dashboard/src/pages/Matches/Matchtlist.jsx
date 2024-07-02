import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'

const Matchlist = () => {
  const navigate = useNavigate();
  return (
    <>
    <div style={{padding:"40px 20px"}}>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">User1_ID</th>
            <th scope="col">User2_ID</th>
            <th>Action</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>@mdo</td>
            <td>
            <button onClick={()=>navigate("matchupdate")} className="btn btn-success" >Update</button>
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

export default Matchlist
