import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { TreeViewProps } from "../../types/components";
import './treeView.css'

export const TreeView: React.FC<TreeViewProps> = ({
    size='medium',
    Icon,
    name, 
    listItems,
    className=''
    })=>{
    const [isActiveBody, setIsActiveBody] = useState<boolean>(false);

    const handlerClick = ()=>{
        setIsActiveBody(!isActiveBody);
    }

    return(
        <div className={`tree-view tree-view-${size} ${className}`}>
            <div className="tree-view-header" onClick={handlerClick}>
                <p>{name}</p>
                <FiChevronDown/>
            </div>
            <ul className={`tree-view-body ${isActiveBody ? 'tree-view-body-active' :''}`}>
                {
                    listItems.map(item=>(
                        <li key={item.id}>
                            {Icon && <Icon />} {item.name} {item.image && <img src={item.image} alt="imagen de elemento de la lista"/>}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}