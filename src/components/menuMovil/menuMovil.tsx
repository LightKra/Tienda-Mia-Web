import React from 'react';
import './menuMovil.css'
import { MenuMovil_Item } from '../menuMovil_Item/menuMovil_item';
import { FiX } from "react-icons/fi";
import { Link } from 'react-router';
import { MenuMovilProps } from '../../types/components';

export const MenuMovil: React.FC<MenuMovilProps> = ({listMenu, user, stateSideMenu, handlerClick})=>{
    return(
        <div className={`menu-movil ${stateSideMenu && "menu-movil-active"}`}>
            <div className="menu-movil-item-user">
                <FiX className='menu-movil-item-user-icon-close' onClick={handlerClick}/>
                <div className='menu-movil-item-user-info'>
                    {
                        user
                        ? <p className="menu-movil-item-user-title">Hola, {user.name}</p>
                        : <div className="menu-movil-item-user-buttons">
                                <Link className='menu-movil-item-user-buttons-link' to='/auth'>Ingresar</Link> | <Link className='menu-movil-item-user-buttons-link' to='/auth'>Registrarse</Link>
                            </div>
                    }
                </div>
            </div>
            {
                listMenu.map((item)=>{
                    return(
                        <MenuMovil_Item key={item.name} name={item.name} list={item.list} Icon={item.Icon}/>
                    )
                })
            }
        </div>
    )
}