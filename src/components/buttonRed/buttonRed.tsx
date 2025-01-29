import React from 'react'
import './buttonRed.css'
import { ButtonRedProps } from '../../types/components';

export const ButtonRed: React.FC<ButtonRedProps> = ({textButton, handlerClick, className})=>{
    const newClassName = className ? className : '';
    return(
        <button className={`button-red ${newClassName}`} onClick={handlerClick}>{textButton}</button>
    )
}