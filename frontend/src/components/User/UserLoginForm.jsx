import  { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
const UserLoginForm = () => {
    //let navigate = useNavigate();
    const [role, setRole] = useState("");
    const [data,setData] = useState({
      emailId: "",
      password: "",
      // role: "",
      
    });
  
    const navigate = useNavigate();
    const [error, setError] = useState("");
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let url;
        let res;
  
        if (role === "Customer") {
          url = "http://localhost:8080/api/user/login";
          const user = {
            email: data.emailId,
            password: data.password,
          };
          res = await axios
            .post(url, user)
            .then((res) => {
              console.log(res.data);
              localStorage.clear();
              localStorage.setItem("user", JSON.stringify(res.data));
              toast.success("Login Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                closeButton: false,
              });
              navigate("../home");
            })
            .catch((err) => {
              setError(err.response.data);
              toast.error(err.response.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                closeButton: false,
              });
            });
        } else if (role === "Admin") {
          url = "http://localhost:8080/api/user/login";
          const  admin = {
            email: data.emailId,
            password: data.password,
          }
          res = await axios.post(
            url,
            admin,
            // role
          ).then((res) => {
            localStorage.clear();
            localStorage.setItem("admin", JSON.stringify(res.data));
            toast.success("Login Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              closeButton: false,
            });
            navigate("../home");
          })
          .catch((err) => {
            setError(err.response.data);
            toast.error(err.response.data, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              closeButton: false,
            });
          });
        }
         else {
          console.log("Didn't got success response");
        }
      } catch (error) {
        console.error(error);
          toast.error("It seems server is down", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }
      e.preventDefault();
    };
  
    return (
      <div>
        <div className="mt-2 d-flex aligns-items-center justify-content-center">
          <div
            className="card form-card border-color custom-bg"
            style={{ width: "25rem" }}
          >
            <div className="card-header bg-color text-center custom-bg-text">
              <h4 className="card-title">User Login</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3 text-color">
                  <label htmlFor="role" className="form-label">
                    <b>User Role</b>
                  </label>
                  <select
                    onChange={handleChange}
                    className="form-control"
                    name="role"
                  >
                    <option value="0">Select Role</option>
                    <option value="admin"> Admin </option>
                    <option value="customer"> Customer </option>
                  </select>
                </div>
  
                <div className="mb-3 text-color">
                  <label htmlFor="emailId" className="form-label">
                    <b>Email Id</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailId"
                    name="emailId"
                    onChange={handleChange}
                    value={data.emailId}
                  />
                </div>
                <div className="mb-3 text-color">
                  <label htmlFor="password" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    autoComplete="on"
                  />
                </div>
                {error && <div className="error_msg">{error}</div>}
                <button
                  type="submit"
                  className="btn bg-color custom-bg-text"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserLoginForm;
  