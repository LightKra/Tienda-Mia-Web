import React from 'react'
import './buttonRed.css'
import { ButtonRedProps } from '../../types/components';

export const ButtonRed: React.FC<ButtonRedProps> = ({
    textButton,
    size='medium',
    Icon,
    backgroundColor='red', 
    onClick=()=>{}, 
    className=''
}) =>{
     
    return(
        <button className={
            `button 
            button-${backgroundColor} 
            button-${backgroundColor}-hover
            button-${size} 
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