//import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
    let navigate = useNavigate();
  
    const user = JSON.parse(sessionStorage.getItem("active-admin"));
    console.log(user);
  
    const adminLogout = () => {
      toast.success("logged out!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      sessionStorage.removeItem("active-admin");
      sessionStorage.removeItem("admin-jwtToken");
      window.location.reload(true);
      navigate("/home");
    };
  
    return (
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color">Add Ground</b>
          </Link>
        </li>
  
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color">View All Ground</b>
          </Link>
        </li>
  
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color">View All Customer</b>
          </Link>
        </li>
  
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color">View All Bookings</b>
          </Link>
        </li>
  
        <li className="nav-item">
          <Link
            to=""
            class="nav-link active"
            aria-current="page"
            onClick={adminLogout}
          >
            <b className="text-color">Logout</b>
          </Link>
          <ToastContainer />
        </li>
      </ul>
    );
  };
  
  export default AdminHeader;
  