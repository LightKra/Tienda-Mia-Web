import React from "react";
import './cardProductV2.css'
import { Card } from "../Card/card";
import { CardProductV2Props } from "../../types/components";
import { ButtonLink } from "../buttonLink/buttonLink";
import './cardProductV2.css'

export const CardProductV2: React.FC<CardProductV2Props> = ({
    discount, 
    title, 
    image, 
    alt, 
    size, 
    textButton,
    className=""
})=>{
    return(
        <Card size={size} className={className}>
            <div className="card-product-v2"> 
                <div className="card-product-v2-flex">
                    <div className="card-product-v2-title">
                        <p>HASTA {discount}% OFF</p>
                        <p>{title}</p>
                    </div>
                    <ButtonLink link="#" textButton={textButton}/>
                </div>
                <div>
                    <img src={image} alt={alt}/>
                </div>
            </div>
        </Card>
    )
}