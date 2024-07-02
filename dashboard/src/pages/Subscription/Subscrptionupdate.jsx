import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


 
export const Subscriptionupdate = () => {
  return (
    <>

    <div className='container'>
        <div className='row justify-content-center' >
        <div className='col-md-8'>
        <form style={{marginTop:"30px", marginBottom:"30px"}}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Type</label>
            <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Start Date</label>
            <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">End Date</label>
            <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
        </div>
    </div>
    </>
  );
}

export default Subscriptionupdate
