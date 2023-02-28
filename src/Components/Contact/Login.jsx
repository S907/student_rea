import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login} from '../../Redux/AuthSlice';

function Login() {

  const dispatch = useDispatch();
  const [user, setUser]=useState({
      email:'',
      password:''
  });
  
  const [err, setError]=useState({})

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
  

  let name,value;
  const onChangeHandle=(e)=>{
     name=e.target.name;
     value=e.target.value;
      
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
     
  }

  const formSubmit = (e)=>{
     e.preventDefault();
  //    setError(validation());
 
  const data={
    'email':user.email,
    'password':user.password
  }
  dispatch(login(data));

  }




  return (
    <>
    
    <div className="container d-flex justify-content-center">
        <h1>Login Form</h1>
    </div>
    
    <div className="container d-flex justify-content-center">
    <form>
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

export default Login