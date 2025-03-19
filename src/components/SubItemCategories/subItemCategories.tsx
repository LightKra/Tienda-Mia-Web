import React from "react";
import { SubSubMenuCategoriesItem } from "../../types/components";
import './subItemCategories.css' 

export const SubItemCategories: React.FC<SubSubMenuCategoriesItem> = ({name, list})=>{

    return (
        <div className='sub-item-categories-list-item'>
                <p className="sub-item-categories-list-item-name">
                     {name}
                </p>
                <div className="sub-item-categories-list-item-list">
                    {
                        list.map(item=>(
                            <p key={item.id}>{item.name}</p>
                        ))
                    }
                </div>
        </div>
    )
}