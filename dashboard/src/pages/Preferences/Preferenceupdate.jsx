import React from 'react'

const Preferenceupdate = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center' >
        <div className='col-md-8'>
        <form style={{marginTop:"30px", marginBottom:"30px"}}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Age Range</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
            <input type="file" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Job</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Religion</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Height</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Preferenceupdate
