import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"


function AdminLogin() {
  const[admin,setadmin]=useState({email:"",password:""})
  
  const email="admin"
  const password="admin123"

  const onchangefn=(a)=>{
    setadmin({
      ...admin,[a.target.name]:a.target.value
    })
  }

  const submitfn=((e)=>{
    e.preventDefault()
    if(email==admin.email){
      if(password==admin.password){
        alert("login successfully")
      }
      else{
        alert("password incorrect")
      }
    }
    else{
      alert("username incorrect")
    }
  })

  return (
    <div>
            <div className='reader_login'>
      <div className='container'>
        <div className='row reader_box contributor_login'>
          <div className='col-sm-12'>
            <h2 className='reader_login_title'>Login</h2>
          </div>
          <form className='reader_login_inp' onSubmit={submitfn}  >
          <div className='col-sm-12 input_text'>
            <input type='text' placeholder='Username' name='email' value={admin.email} onChange={onchangefn}/>
          </div>
          <div className='col-sm-12 input_text'>
            <input type='password' placeholder='Password' name='password' value={admin.password} onChange={onchangefn}  />
          </div>
          <div className='col-sm-12 '>
            {/* <Link to="" style={{textDecoration:'none' ,color:'black'}}><h6 className='mt-4 forget_login'>Forget Password</h6></Link> */}
          </div>
          <div className='col-sm-12  '>
            <button type='submit'  className='btn btn-primary mt-4 login_button'>LOGIN</button>
          </div>
          </form>
          
        </div>

      </div>


    </div>

    </div>
  )
}

export default AdminLogin
