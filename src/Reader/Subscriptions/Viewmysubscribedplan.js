import React from 'react'
import { useNavigate } from 'react-router-dom'

function Viewmysubscribedplan() {
    const navigate=useNavigate()
    const navbckfn=(()=>{
        navigate(-1)
    })
  return (
    <div className="col-9">
        
      <div className="container"><span onClick={navbckfn} className='ri-arrow-left-line span-subsc-right'/>
    
        <div className="reader-viewsubplanshead">
          <p>
             Manage Your Subscription
          </p>
          </div>
          <div className='manage-subsc-usermain'>
          <div className="reader-viewsubplans-box1">
              <div className="reader-viewsubsc-bodhead">
                <p>₹99 One-Time</p>
              </div>
              <div className="reader-viewsubsc-content1">
                <h5 className="ri-medal-2-line" />{" "}
                <p className="">Gold Membership</p>
                <h6>₹99</h6>
              </div>
              <hr />
              <div className="reader-viewsubsc-lists">
                <ul>
                  <li>One time payment</li>
                  <li>Get Ads free experience</li>
                  <li>Exclusive contents</li>
                  <li>
                    Experience a seamless browsing experience without
                    interruptions.
                  </li>
                </ul>
                <p>"Read more news without ads by subscribing Gold plan."</p>
              </div>
              <div className="reader-viewsubsc-button">
               <button type="button">
                  Continue with Gold <span className="ri-arrow-right-s-line" />
                </button>
              </div>
            </div>
          </div>
          </div>
          </div>
  )
}

export default Viewmysubscribedplan