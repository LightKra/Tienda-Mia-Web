import React from "react";
import { NavLink } from "react-router"
import './subMenuAccount.css'
import {ButtonRed} from '../buttonRed/buttonRed'

const listMenu = [
    {name: "Mis ordenes", link: ""},
    {name: "Mi Cuenta", link: ""},
    {name: "Mi Billetera", link: ""},
    {name: "Salir", link: ""}
];

export const SubMenuAccount: React.FC = ()=>{

    const handleClick = ()=>{

    }

    return(
        <div className="sub-menu-account-container">
            <div className="sub-menu-account-triangle"></div>
            <div className="sub-menu-account-info">
                {
                    listMenu.map((item, index)=>{
                        if(index === 0){
                            return(
                                <NavLink key={item.name} to={item.link}>
                                    <ButtonRed textButton={item.name} onClick={handleClick}/>
                                </NavLink>
                            )
                        }else{
                            return(
                                <NavLink className="sub-menu-account-item-link" key={item.name} to={item.link}>
                                    <p className="sub-menu-account-item-link-text">{item.name}</p>
                                </NavLink>
                            )
                        }
                    
                    })
                }
            </div>
        </div>
    )
}