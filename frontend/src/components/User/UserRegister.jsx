import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserRegister = () => {
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      address: "",
      city: "",
      role: "",
      
    });
  
    const navigate = useNavigate();
  
    if (document.URL.indexOf("admin") != -1) {
      user.role = "admin";
    } else if (document.URL.indexOf("customer") != -1) {
      user.role = "customer";
    }
  
    console.log("ROLE FECTHED : " + user.role);
  
    const handleUserInput = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleChange = (event) => {
      setUser({
        ...user ,
        gender: event.target.value,
      });
    };

    
    const saveUser = (event) => {
      event.preventDefault();
      console.log("User : ", user);
      fetch("http://localhost:8080/api/user/admin/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);
           navigate("/user/login");
          if (res.success) {
            console.log("Got the success response");
  
            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
  
        // Redirect after 3 seconds
          } else {
            console.log("Didn't got success response");
            toast.error("It seems server is down", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            // setTimeout(() => {
            //   window.location.reload(true);
            // }, 1000); // Redirect after 3 seconds
          }
        });
      });
    };
  
    return (
      <div>
        <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
          <div
            className="card form-card border-color text-color custom-bg"
            style={{ width: "50rem" }}
          >
            <div className="card-header bg-color custom-bg-text text-center">
              <h5 className="card-title">Register {user.role}</h5>
            </div>
            <div className="card-body">
              <form className="row g-3" onSubmit={saveUser}>
                <div className="col-md-19 mb-3 text-color">
                  <label htmlFor="title" className="form-label">
                    <b> Full Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={handleUserInput}
                    value={user.name}
                  />
                </div>
                
  
                <div className="col-md-6 mb-3 text-color">
                  <b>
                    <label className="form-label">Email Id</label>
                  </b>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleUserInput}
                    value={user.email}
                  />
                </div>
  
                <div className="col-md-6 mb-3">
                  <label htmlFor="quantity" className="form-label">
                    <b> Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleUserInput}
                    value={user.password}
                  />
                </div>
  
                <div className="col-md-6 mb-3 text-color">
                  <label htmlFor="gender" className="form-label">
                    <b>User Gender</b>
                  </label>
                  <select
                       onChange={handleChange}
                      className="form-control"
                      name="gender"
                    >
                  <option value="0">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                </div>
  
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="price" className="form-label">
                    <b>City</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    onChange={handleUserInput}
                    value={user.city}
                  />
                </div>
                
  
                <div className="col-md-19 mb-3">
                  <label htmlFor="description" className="form-label">
                    <b>Address</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    rows="3"
                    onChange={handleUserInput}
                    value={user.address}
                  />
                </div>
  
                
  
  
                <div className="d-flex aligns-items-center justify-content-center">
                  <input
                    type="submit"
                    className="btn bg-color custom-bg-text"
                    value="Register User"
                  />
                </div>
  
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserRegister;
  