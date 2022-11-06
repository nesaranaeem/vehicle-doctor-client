import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
const SignUp = () => {
  const { createUser, updateName, googleLogin, setUser } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();

        // Update Name
        updateName(name, photoURL).then(() => {
          setUser({ ...user, displayName: name, photoURL });
        });
        toast("Signup Success", {
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
        toast("Signup Success", {
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
        toast.error("error", {
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
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <h1 className="text-5xl font-bold text-center pb-3">
                SignUp now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  defaultValue="https://images.unsplash.com/photo-1598589290625-9b04630ec5d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  name="photo"
                  type="text"
                  placeholder="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
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
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div> */}
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign Up"
              />
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
            Already have an Account?{" "}
            <Link to="/login" className="text-orange-600 font-bold">
              LogIn
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
