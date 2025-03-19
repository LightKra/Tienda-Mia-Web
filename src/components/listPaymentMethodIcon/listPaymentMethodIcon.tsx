import React from "react";
import './listPaymentMethodIcon.css'
import { ListPaymentMethodIconProps } from "../../types/components";

export const ListPaymentMethodIcon: React.FC<ListPaymentMethodIconProps> = ({
    listImages,
    className=""
})=>{
    return(
        <div className={`list-payment-method-icon ${className}`}>
            {
                listImages.map(item=>(
                    <img src={item.image} alt={item.alt} key={item.id}/>
                ))
            }
        </div>
    )
}