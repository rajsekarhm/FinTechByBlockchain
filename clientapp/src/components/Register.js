import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/RegisterUI.css";
import "./css/login.css";

export const Registers = () => {
  const navigate = useNavigate();
  const [errorhandle] = useState({
    emailError: false,
    nameError: false,
    passwordError: false,
    secretError: false,
  });
  const [loading, setloading] = useState(false);
  const [customError, SeterrorChecker] = useState(false);
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    password: "",
    secretWord: "",
  });
  const handleChange = (event) => {
    console.log(inputs);
    event.preventDefault();
    let intialerror = errorhandle;
    let checker = 1;
    if (inputs.name === "") {
      intialerror.nameError = true;
      checker = 0;
      setloading(true);
    }
    if (inputs.email === "") {
      intialerror.emailError = true;
      checker = 0;
      setloading(true);
    }
    if (inputs.password === "") {
      intialerror.passwordError = true;
      checker = 0;
      setloading(true);
    }
    if (inputs.secretWord === "") {
      intialerror.secretError = true;
      checker = 0;
      setloading(true);
    }
    if (checker) {
      var detail = JSON.parse(localStorage.getItem("users") || "[]");
      detail.push(inputs);
      localStorage.setItem("users", JSON.stringify(detail));
      navigate(`/dashboard/${inputs.name}`);
    }
  };
  const handleinput = (event) => {
    setloading(false);
    errorhandle.emailError = false;
    errorhandle.nameError = false;
    errorhandle.passwordError = false;
    errorhandle.secretError = false;
    setinputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <section className="center register-block container">
      <div className="container">
        <div className="row ">
          <div className="col register-sec">
            <h2
              className="text-center"
              style={{ fontFamily: "monospace", float: "-moz-initial" }}
            >
              Sign Up
            </h2>
            <form className="register-form" onSubmit={handleChange} action="">
              <div className="form-group">
                <label
                  htmlFor="exampleInputEmail1"
                  className=""
                  style={{ fontFamily: "monospace" }}
                >
                  Enter Username :
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="username"
                  style={{ fontFamily: "monospace", width: 350 }}
                  onClick={() => {
                    if (inputs.name === "") {
                      errorhandle.nameError = true;
                    }
                  }}
                  onChange={handleinput}
                  id=""
                />
                {errorhandle.nameError ? (
                  <span
                    className="text-danger"
                    style={{ fontFamily: "monospace" }}
                  >
                    Name is required.
                  </span>
                ) : null}
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputEmail1"
                  style={{ fontFamily: "monospace" }}
                  className=""
                >
                  Enter Email ID :
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="eample@mail.com"
                  style={{ fontFamily: "monospace", width: 350 }}
                  onClick={() => {
                    if (inputs.email === "") {
                      errorhandle.emailError = true;
                    }
                  }}
                  onChange={handleinput}
                  id=""
                />
                {errorhandle.emailError ? (
                  <span
                    className="text-danger"
                    style={{ fontFamily: "monospace" }}
                  >
                    Email is required.
                  </span>
                ) : null}
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className=""
                  style={{ fontFamily: "monospace" }}
                >
                  Enter Password :
                </label>
                <input
                  className="form-control"
                  placeholder="password"
                  type="password"
                  name="password"
                  style={{ fontFamily: "monospace", width: 350 }}
                  onClick={() => {
                    if (inputs.password === "") {
                      errorhandle.passwordError = true;
                    }
                  }}
                  onChange={handleinput}
                  id=""
                />
                {errorhandle.passwordError ? (
                  <span
                    className="text-danger"
                    style={{ fontFamily: "monospace" }}
                  >
                    Password is required.
                  </span>
                ) : null}
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputSecretPharse"
                  className=""
                  style={{ fontFamily: "monospace" }}
                >
                  secret word :
                </label>
                <input
                  className="form-control"
                  placeholder="password"
                  type="password"
                  name="secretWord"
                  style={{ fontFamily: "monospace", width: 350 }}
                  onClick={() => {
                    if (inputs.secretWord === "") {
                      errorhandle.secretError = true;
                    }
                  }}
                  onChange={handleinput}
                />
                {errorhandle.secretError ? (
                  <span
                    className="text-danger"
                    style={{ fontFamily: "monospace" }}
                  >
                    SecretWord is required.
                  </span>
                ) : null}
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  className="btn btn-login btn-primary"
                  disabled={loading}
                  value="Register"
                  style={{ fontFamily: "monospace", float: "left" }}
                />
              </div>
              <div className="clearfix"></div>
              <br />
              <div className="form-group" style={{ fontFamily: "monospace" }}>
                Already have account ? Please{" "}
                <a
                  href="# "
                  onClick={() => {
                    navigate("/Login");
                  }}
                  style={{ fontFamily: "monospace" }}
                >
                  Login
                </a>{" "}
                here
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
