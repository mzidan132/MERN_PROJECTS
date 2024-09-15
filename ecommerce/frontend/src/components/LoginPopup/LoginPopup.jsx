import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const LoginPopup = ({ setShowLogin }) => {
  const [curState, setCurState] = useState('Login');
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const { url, token, setToken } = useContext(StoreContext);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data, [name]: value
    }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (curState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      const response = await fetch('http://localhost:8000/api/protected', { // Adjust URL if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      
      });

      const data = await response.json();
      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setShowLogin(false);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {curState === "Sign Up" && <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Your Name' required />}
          <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Your Email' required />
          <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required />
        </div>
        <button type='submit'>{curState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <button style={{backgroundColor:'green'}} type='button' onClick={handleGoogleSignIn}>Sign In with Google</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing I agree to the terms and privacy policy</p>
        </div>
        {curState === 'Login'
          ? <p>Create New Account?<span onClick={() => setCurState('Sign Up')}>Click here</span></p>
          : <p>Already Have An Account?<span onClick={() => setCurState('Login')}>Login Here</span></p>}
      </form>
    </div>
  );
};

export default LoginPopup;