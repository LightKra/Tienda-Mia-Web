import React from 'react';
import './cart.css'
import { FiTrash } from "react-icons/fi";
import { ButtonRed } from '../buttonRed/buttonRed';
import { CartProps } from '../../types/components';

export const Cart: React.FC<CartProps> = ({listProducts})=>{

    const handleClick = ()=>{

    }

    return(  
        <div className='cart-list-container'>
            <div className='cart-list-triangle'></div>
            <div className='cart-list-container2'>
                <div className="cart-list">
                    {
                    listProducts.map(item=>(
                        <div key={item.id} className="cart-list-item">
                            <img src={item.image} alt="imagen del producto del carrito" className='cart-list-item-image'/>
                            <p className="cart-list-item-title">{item.name}</p>
                            <FiTrash className='cart-list-item-trash-icon'/>
                            <p className='cart-list-item-quantity'>x{item.stock}</p>
                            <p className='cart-list-item-price'>${item.price}</p>
                        </div>
                        ))
                    }
                </div>
                <div className='cart-list-subtotal'>
                    <p className='cart-list-subtotal-title'>SubTotal Productos:</p>
                    <p className='cart-list-subtotal-price'>$34.55</p>
                </div>
                <ButtonRed onClick={handleClick} textButton='Ver Carrito' className='cart-list-button'/>
            </div>
        </div>
    )
}