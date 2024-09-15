import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

const Header = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // state
  const [value, setValue] = useState();
  const [currentTheme, setCurrentTheme] = useState('dark');

  // logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4">
          <Link to = '/'><img src='/pngegg.png' style={{ width: 70, height: 50, cursor:'pointer' }} alt="Logo" /></Link>
        </Typography>
        {isLogin && (
          <Box display="flex" flexGrow={1} justifyContent="center">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              
              <Tab label="My Blogs" component={Link} to="/my-blogs" />
              <Tab label="Create Blog" component={Link} to="/create-blog" />
              </Tabs>
          </Box>
        )}
        <Box display="flex" alignItems="center">
          {!isLogin && (
            <>
              <Button sx={{ margin: 1, color: "white" }} component={Link} to="/login">
                Login
              </Button>
              <Button sx={{ margin: 1, color: "white" }} component={Link} to="/register">
                Register
              </Button>
            </>
          )}
          {isLogin && (
            <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
