import React from "react";
import { LabelProps } from "../../types/components";
import './label.css'

export const Label: React.FC<LabelProps> = ({
    name='', 
    textColor='white', 
    backgroundColor='red', 
    border='rounded', 
    className=''
})=>{

    return (
        <div 
        className={
            `label 
            label-border-${border}
            label-background-${backgroundColor}
            label-text-${textColor}
            ${className}`
        }> 
            <p className="label-text">{name}</p>
        </div>
    )
}