import React from "react";
import { SelectStore } from "../../components/selectStore/selectStore";

export const ProductSearch: React.FC = ()=>{
    return(
        <div className="product-search-container">
            <section className="product-search-stores">
                <SelectStore/>
            </section>
            <section className="product-search-filter-order">
                
            </section>
            <section className="product-search-list">

            </section>
            <div>

            </div>
        </div>
    )
}