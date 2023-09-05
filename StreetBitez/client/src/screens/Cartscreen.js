import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import axios from 'axios'




export default function Cartscreen() {
    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems

    var subtotal = cartItems.reduce((x , item)=> x+item.price , 0)
    const dispatch = useDispatch()

    
 

  return (
    <div>
         
     
                  
          
    </div>
  )
}
