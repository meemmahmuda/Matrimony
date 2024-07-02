import React from 'react'

const Matchupdate = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center' >
        <div className='col-md-8'>
        <form style={{marginTop:"30px", marginBottom:"30px"}}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User1_ID</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">User2_ID</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Matchupdate
