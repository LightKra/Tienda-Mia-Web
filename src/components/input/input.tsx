import React from "react";
import './input.css'
import { InputProps } from "../../types/components";

export const Input: React.FC<InputProps> = ({
    handlerChange = ()=>{},
    size='medium', 
    placeHolder = '',
    className = ''
})=>{
    return(
        <input className={`input input-${size} ${className}`} onChange={handlerChange} placeholder={placeHolder}/>
    )
}