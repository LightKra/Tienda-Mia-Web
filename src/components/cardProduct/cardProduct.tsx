import React from "react";
import './cardPorduct.css';
import { CardProductProps } from "../../types/components";
import { Label } from "../label/label";
import { Card } from "../Card/card";

export const CardProduct: React.FC<CardProductProps> = ({
    image, 
    imageDescription, 
    title, 
    price, 
    priceDiscounted, 
    isShipment, 
    nameBank,
    size='medium'
})=>{
    return(
        <Card size={size}>
            <div className={`card-product`}>
                <img src={image} alt={imageDescription}/>
                <hr/>
                <div className="card-product-body">
                    <p className="card-product-body-title">{title}</p>
                    <p className="card-product-body-price">Desde US$ {price}</p>
                    <p className="card-product-body-price-discounted">
                        U$S <span className="">{priceDiscounted}</span>
                        <span> 60 % OFF</span>
                    </p>
                    {
                        isShipment && <p><Label border="normal" name="ENVIO INCLUIDO" textColor="green" backgroundColor="green"/></p>
                    }
                    <p className="card-product-body-bank">Difiere a 3 y 6 meses sin intereses con {nameBank}</p>
                </div>
            </div>
        </Card>
    )
}