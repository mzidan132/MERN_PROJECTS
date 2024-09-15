import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets' //retrieve menu from array
const ExploreMenu = ({category,setCategory}) => { //color menu tomato kore round props
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delightable array of dishses crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining exprience, one delicios meal.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                        {/* if All then show all category and if not then show distinct category */}
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu