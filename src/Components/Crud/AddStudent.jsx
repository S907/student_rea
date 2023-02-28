import { useState, useEffect } from "react";
import {useDispatch, useSelector}from "react-redux"
import { add, listing } from "../../Redux/CrudSlice";
// import { register } from "../../Redux/LoginSlice";
export default function AddStudent() {
  const {status} = useSelector((s) => s.crud);
  const [img, setimg] = useState("");
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city:"",
    class:""

  });
  const [error, setError] = useState({});
  const dispatch = useDispatch()

  const validation = () => {
    let error = {};

    if (!user.name) {
      
      error.name = "Name is Required";
    }

    if (!user.email) {
      error.email = "Email is Required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user.email
      )
    ) {
      error.email = "Enter a valid Email";
    }

    if (!user.phone) {
      error.phone = "Phone is Required";
    }

    if (!user.address) {
      error.address = "School name is Required";
    }

    if (!user.city) {
      error.city = "Image name is Required";
    }

    if(!user.class){
      error.class="Class is required"
    }
    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "Name is Required" });
        setUser({ ...user, name: "" });
      } else {
        setError({ ...error, name: "" });
        setUser({ ...user, name: value });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "@Email is Required" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }

    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "@Phone is Required" });
        setUser({ ...user, phone: "" });
      } else {
        setError({ ...error, phone: "" });
        setUser({ ...user, phone: value });
      }
    }

    if (name === "address") {
      if (value.length === 0) {
        setError({ ...error, address: "@School name is Required" });
        setUser({ ...user, address: "" });
      } else {
        setError({ ...error, address: "" });
        setUser({ ...user, address: value });
      }
    }
    if (name === "city") {
      if (value.length === 0) {
        setError({ ...error, city: "@School name is Required" });
        setUser({ ...user, city: "" });
      } else {
        setError({ ...error, city: "" });
        setUser({ ...user, city: value });
      }
    }

    if (name === "class") {
      if (value.length === 0) {
        setError({ ...error, class: "@School name is Required" });
        setUser({ ...user, class: "" });
      } else {
        setError({ ...error, class: "" });
        setUser({ ...user, class: value });
      }
    }
  };



  // console.log(error);
  const SubmitInfo = (e) => {
    e.preventDefault();
    setError(validation());

    let data={
      "name":user.name,
      "email":user.email,
      "phone":user.phone,
      "address":user.address,
      "city":user.city,
      "class":user.class,
     }
        // formData.append("email",user.email)
        // formData.append("password",user.password)
        dispatch(add(data)).then(()=>{
          dispatch(listing())
        })
      
        

  };


  return (
    <>
      <form className="container mt-5">
        <h4> Add User </h4>
        <div>
          <label> Name </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={(e) => postUserData(e)}
          />
          <span style={{ color: "red", marginLeft: "24px" }}>
            {" "}
            {error.name}{" "}
          </span>
        </div>
        <div>
          <label> Email </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={(e) => postUserData(e)}
          />
          <span style={{ color: "red", marginLeft: "24px" }}>
            {" "}
            {error.email}{" "}
          </span>
        </div>
        <div>
          <label> Phone </label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={user.phone}
            onChange={(e) => postUserData(e)}
          />
          <span style={{ color: "red", marginLeft: "24px" }}>
            {" "}
            {error.phone}{" "}
          </span>
        </div>
        <div>
          <label> Address </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={user.address}
            onChange={(e) => postUserData(e)}
          />
          <span style={{ color: "red", marginLeft: "24px" }}>
            {" "}
            {error.address}{" "}
          </span>
        </div>
     
        <div>
          <label>City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={user.city}
            onChange={(e) => postUserData(e)}
          />
          <span style={{ color: "red", marginLeft: "24px" }}>
            {" "}
            {error.city}{" "}
          </span>
        </div>
     
        <div>
          <label>Class</label>
          <input
            type="text"
            className="form-control"
            name="class"
            value={user.class}
            onChange={(e) => postUserData(e)}
          />
          <span style={{ color: "red", marginLeft: "24px" }}>
            {" "}
            {error.class}{" "}
          </span>
        </div>
        <div>
        {status == "loading" ? (
                                    <div className="profile_field job_submit">
                                      <input
                                        type="submit"
                                        disabled={true}
                                        value="Loading..."
                                        onClick={SubmitInfo}
                                      />
                                    </div>
                                  ) : (
                                    <div className="profile_field job_submit">
                                      <input
                                        type="submit"
                                        value="Submit"
                                        onClick={SubmitInfo}
                                      />
                                    </div>
                                  )}
          {/* <button
            onClick={SubmitInfo}
            type="submit"
            className="btn btn-success px-4 py-2"
          >
            {" "}
            Add User{" "}
          </button> */}
        </div>
      </form>
    </>
  );
}


