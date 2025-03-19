import React from "react";
import { SubItemCategories } from "../SubItemCategories/subItemCategories";
import './ListsubItemsCategories.css'
import { ListSubItemsCategoriesProps } from "../../types/components";

export const ListSubItemsCategories: React.FC<ListSubItemsCategoriesProps > = ({isHover, name, list})=>{
    return(
        <div className={`sub-item-categories ${isHover ? 'sub-item-categories-active' : ''}`}>
            <h4 className="sub-item-categories-title">{name}</h4>
            <hr/>
            <div className="sub-item-categories-list">
                {
                    list && list.map(item=> (
                        <div key={item.id}>
                            <SubItemCategories id={item.id} name={item.name} list={item.list}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}