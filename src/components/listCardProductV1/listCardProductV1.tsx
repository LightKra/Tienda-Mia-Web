import React from "react";
import { ListCardProductV1Props } from "../../types/components";
import { CardProductV2 } from "../cardProductV2/cardProductV2";
import { CardProductV3 } from "../cardProductV3/cardProductV3";
import './listCardProductV1.css'

export const ListCardProductV1: React.FC<ListCardProductV1Props> = ({listItem})=>{
    return(
        <div className="list-card-product-v1">
            {
                listItem.map(item=>{
                    if(item.type === 'v2'){
                        return (
                            <CardProductV2
                            key={item.id}
                            discount={item.discount}
                            title={item.title}
                            image={item.image}
                            alt={item.alt}
                            textButton={item.textButton}
                            size={item.size}
                            />
                        )
                    }else{
                        return(
                            <CardProductV3
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            alt={item.alt}
                            textButton={item.textButton}
                            size={item.size}
                            />
                        )
                    }
                })
            }
        </div>
    )
}