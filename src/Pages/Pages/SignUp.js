import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero w-full">
      <div className="hero-content grid gap-10 my-20 md:grid-cols-2">
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
            <div className="form-control">
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
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="flex flex-col items-center pb-8 px-8">
            <button className="btn  btn-primary ">
              <FaGoogle className="mr-2" />
              Login with Google
            </button>
            <p className="text-xl">Or</p>
            <button className="btn">
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
