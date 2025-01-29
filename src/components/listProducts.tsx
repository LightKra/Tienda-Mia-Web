import React from "react";
import { CardProduct } from "./cardProduct";
import { ListProductProps } from "../types/components";


export const ListProduct: React.FC<ListProductProps> = ({products})=>{
    return(
        <>
            <section style=
                {{
                    display: "flex", 
                    flexWrap: "wrap", 
                    gap: 10
                }}>
                {
                    products.map(item=>(
                        <CardProduct key={item.id} name={item.name} description={item.description} image={item.image}/>
                    ))
                }
            </section>
        </>
    )
}