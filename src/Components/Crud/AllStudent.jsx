import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listing } from '../../Redux/CrudSlice'
import { Link, NavLink, useNavigate } from "react-router-dom";
// import SweetAlertComponent from '../SweetAlert/SweetAlert';
export default function AllStudent() {
  const navigate = useNavigate();
  
  const [delete_id, setDelete_id] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  console.log(isDelete,"delete_id")
  const {studentList} = useSelector((s) => s.crud);
  console.log('13',studentList);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(listing())
   }, [])
  
   const delete_func = (id) => {
    if (delete_id !== "") {
      // dispatch(DeleteUser(delete_id))
    }
    // if (delete_id !== "") {

    // }
    setDelete_id("");
    setIsDelete(false);
  };

  return (
<div className="container">
  <div className="row" style={{marginTop:"5rem"}}>
  {studentList?.map((item=>{
     return(
      <>
      <div className="col-md-4">
    <div class="card" >
    <div class="card-body">
    <h2 className="card-title">{item?.name}</h2>
    <h4 className="card-title">{item?.class}</h4>
    <h5 className="card-title">{item?.address}</h5>
    <p className="card-text">{item?.city}</p>
    <p className="card-text">{item?.email}</p>
    <p className="card-text">{item?.phone}</p>
    <a href="#" class="btn btn-primary">Details</a>
    <Link to={`/Edit/${item?._id}`}  class="btn btn-primary mr">Edit</Link>
    <Link to=''   onClick={() => {
                    setDelete_id(item?._id);
                    setIsDelete(true);
                  }} class="btn btn-primary mr">Delete</Link>
  
  </div>
</div>
</div>
{/* {isDelete && (
  <SweetAlertComponent
    confirm={delete_func}
    cancle={() => setIsDelete(false)}
    title={"Are you sure?"}
    subtitle={"You will not be able to recover!"}
  />
)} */}
      </>
       
       
    
    )
 

   
  }))}


   
  </div>
  </div>
  )
}
