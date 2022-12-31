import React from "react";
import { useContext } from "react";
import newContext from "./NewContext";

function Register() {

  let formHandler=(e)=>{
    e.preventDefault();
    console.log(e.target[0].value)
  }

  let [count,setCount] = useContext(newContext);

  let loginHandler=()=>{
    setCount({plus:count.plus,minus:count.minus,list:count.list,shower:"four"});
  }

  return (
    <div className="register">
      <div className="reg-body">
        <div className="reg-head">
          <h2>Registration</h2>
        </div>
        <div>
          <form action="" onSubmit={formHandler}>
            <div className="reg-name">
              <label htmlFor="reg-name">Full Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="reg-mob">
              <label htmlFor="reg-mob">Mobile Number</label>
              <input type="tel" placeholder="Enter Your Mobile Number"/>
            </div>
            <div className="reg-email">
              <label htmlFor="reg-email">Email</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="reg-pass">
              <label htmlFor="reg-pass">Create A Password</label>
              <input type="password" placeholder="Create A Password" />
            </div>
            <div className="reg-confirm-pass">
              <label htmlFor="reg-confirm-pass">Confirm Your Password</label>
              <input type="password" placeholder="Confirm Your password" />
            </div>
            <div className="reg-btn">
              <button>Register</button>
            </div>
          </form>
          <span className="al-acc">
            Already Have An Account ? <a onClick={loginHandler}>Login</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
