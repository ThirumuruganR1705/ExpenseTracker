import React from 'react';
import newContext from './NewContext';
import { useContext } from 'react';
import img from './images/rupee.jpg';

function Login() {

  let [count,setCount] = useContext(newContext);

  let balance = count.plus + count.minus;

  let RegisterHandler=()=>{
    setCount({plus:count.plus,minus:count.minus,list:count.list,shower:"five"});
  }

    return (
      <div className="login">
        <div className="sub-login">
          <h2 className="login-head">LOGIN</h2>
          <form action="" className="login-form`">
            <div className="user">
              <label id="label">User Name</label>
              <input type="text" placeholder="Enter UserName" id="input-login" />
            </div>
            <div className="pass">
              <label id="label">Password</label>
              <input
                type="password"
                name="password"
                id="input-login"
                placeholder="Enter Password"
              />
            </div>

            <div className="login-btn">
              <button className='submit-btn'>Submit</button>
            </div>
          </form>
          <span className="reg">Don't Have An Account?<a onClick={RegisterHandler}>Register</a></span>
          
        </div>
        <img src={img}/>
      </div>
    );
}

export default Login;