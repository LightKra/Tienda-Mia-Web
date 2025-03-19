import React from "react";
import { Card } from "../Card/card";
import { cardProductV3Props } from "../../types/components";
import { ButtonLink } from "../buttonLink/buttonLink";
import './cardProductV3.css'

export const CardProductV3: React.FC<cardProductV3Props> = ({
    image,
    alt,
    title,
    textButton,
    size="medium",
    className=""
})=>{
    return(
        <Card size={size} className={className}>
            <div className="card-product-v3">
                <img src={image} alt={alt}/>
                <p>{title}</p>
                <ButtonLink link="#" textButton={textButton} />
            </div>
        </Card>
    )
}