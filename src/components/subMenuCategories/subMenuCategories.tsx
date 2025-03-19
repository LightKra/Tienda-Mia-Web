import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import './subMenuCategories.css'
import { ListSubItemsCategories } from "../ListSubItemsCategories/ListSubItemsCategories";
import { categories } from "./subMenuCategoriesList";
import { Link } from "react-router";

export const SubMenuCategories: React.FC = ()=>{
    const [selectedItem, setSelectedItem] = useState<string>('');

    const handlerMouseEnter = (nameItem: string)=>()=>{
        setSelectedItem(nameItem)
    }
    const handlerMouseLeave = ()=>{
        setSelectedItem('')
    }
    return(
        <div className="sub-menu-categories">
            <ul className="sub-menu-categories-list">
                {
                    categories.map(item=>{
                        if(item.link){
                            return (
                                <li className="sub-menu-categories-list-item" key={item.id}>
                                    <Link className="sub-menu-categories-link" to={item.link}>
                                        <div>{item.name}</div>
                                        {item.Icon && <item.Icon border="rounded" name="nuevo" textColor="white" backgroundColor="red"/>}
                                    </Link>
                                </li>
                            )
                        }else{
                            return (
                                <li 
                                onMouseEnter={handlerMouseEnter(item.name)} 
                                onMouseLeave={handlerMouseLeave} 
                                className="sub-menu-categories-list-item" 
                                key={item.id}>
                                    {item.name} <FiChevronRight/>
                                    {
                                        item.list && <ListSubItemsCategories id={item.id} isHover={item.name === selectedItem} name={item.name} list={item.list}/>
                                    }
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
}