import React from 'react';
import './menuMovil_Item.css'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router';
import { useState } from 'react';
import { MenuMovilItemProps } from '../../types/components';

export const MenuMovil_Item: React.FC<MenuMovilItemProps> = ({name, list, Icon})=>{
    const [selectItem, setSelectItem] = useState(false);

    const handlerClickItem = ()=>{
        setSelectItem(!selectItem);
    }

    return(
        <div className={`menu-movil-item ${selectItem ? "menu-movil-item-active" : ""}`} onClick={handlerClickItem}>
            <div className='menu-movil-item-text'>
                {Icon}
                <p className="menu-movil-item-title">{name}</p>
            </div>
            <FiChevronDown className={`menu-movil-item-icon ${selectItem ? "" : ""}`}/>
            <div className={`menu-movil-item-list ${selectItem ? "menu-movil-item-list-active" : ""}`}>
                {
                    list.map((item)=>{
                        return(
                                <Link key={item.name} className='menu-movil-item-list-item' to={item.link}>
                                    <p className='menu-movil-item-list-item-title'>{item.name}</p>
                                    <FiChevronRight className='menu-movil-item-list-item-icon'/>
                                </Link>
                            )
                        })
                }
            </div>
        </div>
    )
}