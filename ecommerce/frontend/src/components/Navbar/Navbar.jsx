import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Load the theme from localStorage when the component mounts
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    setCurrentTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setCurrentTheme(newTheme);
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setToken();
    navigate('/');
  };

  const orders = () => {
    navigate('/myorders');
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' className={currentTheme === 'home' ? 'active' : ''}>home</Link>
        <a href='#explore-menu' className={currentTheme === 'menu' ? 'active' : ''}>menu</a>
        <a href='#app-download' className={currentTheme === 'mobile-app' ? 'active' : ''}>mobile-app</a>
        <a href='#footer' className={currentTheme === 'contact-us' ? 'active' : ''}>contact-us</a>
      </ul>
      
      <div className="navbar-right">
        <button className='btn' onClick={toggleTheme}>
          {currentTheme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <div className="navbar-search-icon">
          <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>SignIn</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='nav-profile-dropdown'>
              <li onClick={orders}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>LogOut</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
