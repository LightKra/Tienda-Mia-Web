import React from "react";
import { FiClock } from "react-icons/fi";
import './searchWindow.css'
import { SearchWindowProps } from "../../types/components";

export const SearchWindow: React.FC<SearchWindowProps> = ({listMenu})=>{
    
    return (
        <div className={`search-window`}>
            {
                listMenu.map(item=>{
                    return(
                        <div key={item.id} className="search-window-item">
                            <FiClock/>
                            <p className="search-window-item-text">{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}