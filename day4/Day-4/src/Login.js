
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { Component, useState } from 'react'
import { useDispatch } from 'react-redux';
export const Login = () => {
   const [ user, setUser ] = useState({})

    const handleChange = (e) => {
      setUser({...user, [e.target.name] : e.target.value});
    } 

    const naviagte = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch({ type: 'SIGN_UP', payload: user});

      naviagte('/home')

    }
    return (
      <div className='box1'>
  
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form autocomplete="off" onSubmit={ handleSubmit} class="sign-in-form">
              <div class="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Vdd-VpHyFzhAmYv2wT5E7V-Ki_O_ejwZFg&usqp=CAU" alt="easyclass" />
                <h4>Register here!</h4>
              </div>

              <div class="heading">
                <h2>Welcome</h2>
    
               
                <br></br>
                <h6>Already have an account?</h6>
                <Link to="/sign"><a href="#" class="toggle">Log In</a></Link><br></br>
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Name'
                    required
                    name='name'
                    onChange={handleChange}
                  />
                  
                </div>

                <div class="input-wrap"> 
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder="Password"
                    required
                    name='password'
                    onChange={handleChange}
                  />
                  
                </div>
                <div class="input-wrap"> 
                  <input
                    type="email"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Email'
                    required
                    name='email'
                    onChange={handleChange}
                  />
                  
                </div>
                <div class="input-wrap"> 
                  <input
                    type="date"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='DOB'
                    required
                    name='dob'
                    onChange={handleChange}
                    />
                </div>
                    
                <div class="input-wrap"> 
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Gender'
                    required
                    name='gender'
                    onChange={handleChange}
                  />
                  
                </div>

                <div class="text">
                <input type="checkbox"></input> By signing up, I agree to the Terms of Services and Privacy Policy
                </div>
                <br>
                </br>
                <button onSubmit={ handleSubmit } type="submit" value="Sign Up" class="sign-btn">Sign Up</button>            
              </div>
            </form>

            
          </div>

          <div class="carousel">
            
            <img className="wall" style={{height:"500px"}} src="https://img.freepik.com/free-vector/pension-fund-bank-saving-money-cartoon-concept_107791-743.jpg?w=2000"></img>

           
          </div>
        </div>
      </div>
   

 
    </div>
    
  )
  
}

export default Login
