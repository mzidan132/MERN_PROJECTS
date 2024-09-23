import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
export const FoodItem = ({ id, name, price, description, image }) => {
  //const [itemCount, setItemCount] = useState(0)
  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext)
  
  /*
 !itemCount
            ? <img className='add' onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_white} />
            : <div className='food-item-counter'>
              <img onClick={() => setItemCount(prev => prev - 1)} src={assets.remove_icon_red} />
              <p>{itemCount}</p>
              <img onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_green} />
            </div>
  */
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={`${image}`} alt="" className="food-item-image" /> {/* <img src={url+"/images/"+image} /> */}
        {
          !cartItems[id]
            ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
            : <div className='food-item-counter'>
              <img style={{cursor:'pointer'}} onClick={() => removeFromCart(id)} src={assets.remove_icon_red} />
              <p>{cartItems[id]}</p> {/* add to db */}
              <img style={{cursor:'pointer'}} onClick={() => addToCart(id)} src={assets.add_icon_green} />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}
