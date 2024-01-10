import React, { useEffect, useState } from 'react'
import "../Admin/Adminviewuser.css"
import axiosInstance from '../BaseUrl'
import { Link } from 'react-router-dom'


function Adminviewuser() {
  const[data,setdata]=useState([])
  useEffect(()=>{
    axiosInstance.post(`viewallusers`)
    .then((res)=>{
      console.log(res.data);
      if (res.data.status === 200) {
          setdata(res.data.data);
        
      } else if (res.data.status === 500) {
        alert("No user found");
      }
    })
    
    .catch((err)=>{
      console.log(err);
    })
  },[])


  return (
    <div className='col_8'>
        <div className='reader_viewuser container'>
            <div className='reader_viewuser_head row'>
              <div className='col-6'>
                <h4>Users</h4>
                </div>  
                <div className='col-6'>
                  <h4>Users</h4>
                </div>  
            </div>
            <div className='reader_viewuser_box row'>
              <div className='reader_viewuser_content col'>
              <p>Regno</p>
              <p className='reader_viewuser_name'>Name</p>
              <p className='reader_viewuser_status'>Status</p>
              <p className='reader_viewuser_account'>Account Status</p>
              <p className='reader_viewuser_activity'>Activity</p>
              <p className='reader_viewuser_location'>Loction</p>
              </div>
            </div>
            {data.length ? (
          data.map((a) => (
            <Link to={"/admin_viewsingleuser/"+a._id }style={{textDecoration:'none', color: 'black' }}><div className='reader_viewuser_content col col reader_viewuser_box'> 
                         <p>Regno</p>

              <p className='reader_viewuser_name' >{a.firstname}</p>
              <p className='reader_viewuser_status'>Status</p>
              <p className='reader_viewuser_account'>account</p>
              <p className='reader_viewuser_activity'>activity</p>
              <p className='reader_viewuser_location'>location</p>
            </div></Link>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}
export default Adminviewuser