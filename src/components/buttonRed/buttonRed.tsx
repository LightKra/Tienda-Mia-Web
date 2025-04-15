import React from 'react'
import './buttonRed.css'
import { ButtonRedProps } from '../../types/components';

export const ButtonRed: React.FC<ButtonRedProps> = ({
    textButton,
    size='medium',
    Icon,
    backgroundColor='red',
    border='square',
    onClick=()=>{}, 
    className=''
}) =>{
     
    return(
        <button className={
            `button 
            button-${backgroundColor} 
            button-${backgroundColor}-hover
            button-${size}
            button-border
            button-border-${border}
            ${className}`
        } 
            onClick={onClick}
            >
                {
                    Icon && <div className='button-icon'>
                                <Icon/>
                            </div>
                }
                <p>
                    {textButton}
                </p>
        </button>
    )
}