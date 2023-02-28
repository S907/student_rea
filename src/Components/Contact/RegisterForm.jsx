import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import { register } from '../../Redux/AuthSlice';

function RegisterForm() {
  const dispatch = useDispatch();
    const [user, setUser]=useState({
        name:'',
        email:'',
        mobile:'',
        password:''
    });
    const [img, setImage]=useState('');
    const [err, setError]=useState({});


    // const validation=(e)=>{
    //     let err={}
    //     if(!user.name){
    //         err.name='Name is required'
    //     }
    //     if(!user.email){
    //         err.email='Email is required'
    //     }
    //     if(!user.password){
    //         err.password='Password is required'
    //     }
    // }
    

    const handleImageSubmit=(e)=>{
        setImage(e.target.files[0])
    }

    let name,value;
    const onChangeHandle=(e)=>{
       name=e.target.name;
       value=e.target.value;
       
       if(name == 'name'){
        if(value.length==0){
            setError({...err, message:'Name cannot be empty'});
            setUser({...err, name:''});
        }else{
            setError({...err, message:''});
            setUser({...user, name:value});
        }
       } 
       if(name == 'email'){
        if(value.length==0){
            setError({...err, message:'Email cannot be empty'});
            setUser({...err, email:''});
        }else{
            setError({...err, message:''});
            setUser({...user, email:value});
        }
       } 
       if(name == 'password'){
        if(value.length==0){
            setError({...err, message:'Password cannot be empty'});
            setUser({...err, password:''});
        }else{
            setError({...err, message:''});
            setUser({...user, password:value});
        }
       } 
       if(name == 'mobile'){
        if(value.length==0){
            setError({...err, message:'mobile number cannot be empty'});
            setUser({...err, password:''});
        }else{
            setError({...err, message:''});
            setUser({...user, mobile:value});
        }
       } 
    }

    const formSubmit = (e)=>{
       e.preventDefault();
    //    setError(validation());
   
    const formData =new FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('image', img);
    formData.append('mobile', user.mobile);
    // for(const val of formData.values()){
    //     console.log(val);
    // }

    dispatch(register(formData));
    
    }

  return (
    <>
    
    <div className="container d-flex justify-content-center">
        <h1>Registration Form</h1>
    </div>
    
    <div className="container d-flex justify-content-center">
    <form>
  <div className="form-group p-1">
    <label htmlFor="exampleInputname">Name:</label>
    <input type="text" 
    className="form-control" 
    id="exampleName" 
    aria-describedby="nameHelp" 
    name='name'
    value={user.name}
    onChange={onChangeHandle}
    />
     <span style={{ color: "red" }}>{err?.name}</span>
  </div>
  <div className="form-group p-1">
    <label htmlFor="exampleInputEmail1">Email address:</label>
    <input type="email" 
    className="form-control" 
    id="exampleInputEmail1"
    aria-describedby="emailHelp" 
    name='email'
    value={user.email}
    onChange={onChangeHandle}
    />
    <span style={{ color: "red" }}>{err?.email}</span>
    
  </div>
  <div className="form-group p-1">
    <label htmlFor="exampleInputPic">Image:</label>
    <input type="file" 
    id="exampleFile" 
    aria-describedby="fileHelp" 
    accept='image/*'
    name='image'
    onChange={handleImageSubmit}
    />
    
  </div>
  <div className="form-group p-1">
    <label htmlFor="exampleMobile">Mobile Number:</label>
    <input type="text" 
    className="form-control" 
    id="exampleMobile"
    aria-describedby="emailHelp" 
    name='mobile'
    value={user.mobile}
    onChange={onChangeHandle}
    />
    <span style={{ color: "red" }}>{err?.mobile}</span>
    
  </div>
  <div className="form-group p-1">
    <label htmlFor="exampleInputPassword1">Password:</label>
    <input type="password" 
    className="form-control" 
    id="exampleInputPassword1" 
    name='password'
    value={user.password}
    onChange={onChangeHandle}
    />
  </div>
  <span style={{ color: "red" }}>{err?.password}</span>
  <button type="submit" class="btn btn-primary" onClick={formSubmit}>Submit</button>
  
    </form>
    </div>

    </>
  )
}

export default RegisterForm