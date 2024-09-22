import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  
  return (
    <div className=''>
<h1 style={{textAlign:'center',color:'tomato'}}> Welcome to Omega Food Shop </h1>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={assets.foods} style={{width:700,height:400}} className="d-block mx-auto img-fluid" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={assets.food} style={{width:700,height:400}}  className="d-block mx-auto img-fluid" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={assets.header_img} style={{width:700,height:400}}  className="d-block mx-auto img-fluid" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>


        <div className="header-contents" >
            <h2>Order Your Favourite Food Here</h2>
            <p>Choose from a diverse menu featuring a delightable array of dishses crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining exprience, one delicios meal at a time.</p>
            <button>View Menu</button>
        </div>
        </div>

    </div>
  )
}

export default Header
