import React from 'react'
import './buttonTransparent.css'
import { ButtonTransparentProps } from '../../types/components'

export const ButtonTransparent: React.FC<ButtonTransparentProps> = ({textButton, image, handlerClick})=>{
    return (
        <button className='button-transparent' onClick={handlerClick}>
            <img className='button-transparent-image' src={image} alt="Icono del boton" />
            {textButton}
        </button>
    )
}