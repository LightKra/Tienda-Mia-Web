import React from "react";
import { CardProps } from "../../types/components";
import './card.css'

export const Card: React.FC<CardProps> = ({
    size='medium',
    children,
    className=""
})=>{
    return (
        <div className={`card card-${size} ${className}`}>
            {children}
        </div>
    )
} 