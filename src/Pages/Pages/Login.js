import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
const Login = () => {
  const { loginUserEmailPassword, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUserEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        toast("Login Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  const provider = new GoogleAuthProvider();
  const handelGoogleLogin = () => {
    googleLogin(provider)
      .then((result) => {
        toast("Login Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login Error", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className="hero w-full">
      <div className="hero-content grid justify-items-center gap-10 my-20 md:grid-cols-2">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={loginImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
          <div className="flex flex-col items-center pb-8 px-8">
            <button className="btn  btn-primary" onClick={handelGoogleLogin}>
              <FaGoogle className="mr-2" />
              Login with Google
            </button>
            <p className="text-xl">Or</p>
            <button className="btn" disabled>
              <FaGithub className="mr-2" />
              Login with GitHub
            </button>
          </div>
          <p className="text-center">
            New to VehicleDoctor?{" "}
            <Link to="/signup" className="text-orange-600 font-bold">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
