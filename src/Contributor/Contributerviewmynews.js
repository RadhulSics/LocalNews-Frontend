import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrl";
import { Link } from "react-router-dom";

function Contributerviewmynews({url}) {
  const contributerid=localStorage.getItem("contibuterid")
  console.log(contributerid);

  const[data,setData]=useState([])

  useEffect(()=>{
    axiosInstance.post(`viewnewsByContributorId/${contributerid}`)
    .then((res)=>{
      console.log(res);
      setData(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div className="reader_politics container" style={{ margin: "30px" }}>
      {data.length ? (
      data.map((a) => {
        const dateTime = new Date(a.date);
        const timeString = dateTime.toLocaleTimeString();
        return (
      <div className="row" style={{margin:"30px"}}>
        <div className="col-md-5 readre_politics_image">
          <img src={`${url}/${a.image.filename}`} alt="images" width="400px" height="300px" />
        </div>
        <div className="col-md-6 offset-md-1  reader_politics_text">
          <h2>"{a.title}"</h2>
          <p>
            {a.content}
          <Link to={"/contributerdltupdtnews/"+a._id}> <button type="submit" className="readmorebtn">
              Read more
            </button></Link> 
          </p>
          {/* <div className='like-dislike-buttons'> */}
          <button className="ri-map-pin-line" id="reader_location">
            {a.location}
          </button>
          <button className="ri-map-pin-time-line" id="reader_time">
            {a.date}
          </button>

          {/* </div> */}
        </div>
      </div>
   
   );
 })
) : (
 <div>No data available</div>
)}

    </div>
  );
}

export default Contributerviewmynews;
