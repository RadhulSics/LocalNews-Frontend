import React, { useState } from 'react'
import "../Reader/Menu.css"
import Report from './Report';
import { Modal,Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrl';


function Menu({nid}) {
  console.log('nid',nid);

  const [showMenuModal, setShowMenuModal] = useState(false);
  const handleLoginButtonClick = () => {
      setShowMenuModal(true);
  };

  const handleMenuModalClose = () => {
      setShowMenuModal(false);
  };
const id=useParams()
  const [savenews,setSavenews]=useState({
    newsid:nid,
    readerid:localStorage.getItem('readerid')
  })
//   const readerid = localStorage.getItem("readerid");
//   console.log(readerid);

const savefn=(()=>{
  axiosInstance.post(`savenews`,savenews)
  .then((res)=>{
    console.log(res);
    if(res.data.status==200){
      alert("saved")
      window.location.reload(false)
    }
  })
  .catch((err)=>{
    console.log(err);
  })
})


  return (
    <div className='container' >
        <div className='row menu-reader'>
            <div className='col'>
                <div className='ri-error-warning-fill menu-reader-rept ' onClick={handleLoginButtonClick}>Report</div>
               

                <div className='ri-save-line menu-reader-rept' style={{paddingTop:"10px"}} onClick={() => { savefn(savenews.nid) }}>Save</div>
                
            </div>
        </div>
        <Modal show={showMenuModal} onHide={handleMenuModalClose} style={{width:"350px",height:"700px" ,marginLeft:"940px"}}>
                <Modal.Header closeButton>
                    <Modal.Title>Report</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{cursor:"pointer"}}>
                    <Report nid={nid}/>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleMenuModalClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
    </div>
  )
}

export default Menu