import React from 'react'

const Photoupdate = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center' >
        <div className='col-md-8'>
        <form style={{marginTop:"30px", marginBottom:"30px"}}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Photo URL</label>
            <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Photoupdate
