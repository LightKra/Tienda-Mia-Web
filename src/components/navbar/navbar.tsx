import { Link, useLocation, Location} from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { useAuth } from "../../hooks/auth.js";
import { Search } from "../search/search.js";
import {SubMenuAccount} from "../subMenuAccount/subMenuAccount.js"
import { SubMenuNoAccount } from "../subMenuNoAccount/subMenuNoAccount.js";
import { Card } from "../card/Card";
import { useStorageCart } from "../../storage/storageCart";
import { MenuMovil } from "../menuMovil/menuMovil";
import logo from '../../assets/logoTienda.png'
import tableta1 from '../../assets/tableta1.png'
import './navbar.css'
import { useEffect, useState } from "react";

export const Navbar = ()=>{
    const {getUser} = useAuth();
    const cart = useStorageCart((state)=>state.cart);
    const addCart = useStorageCart((state)=>state.add);
    const location: Location = useLocation();
    const [navbarAuth, setNabvarAuth] = useState(false);
    const [sideMenu, setSideMenu] = useState(false);
    const user = getUser();
    const listMenuMovil = [
        {
            name: "Categoria", 
            Icon: <FiAlignJustify/>,
            list: [
                {
                    name: "Tecnologia1",
                    link: ""
                },
                {
                    name: "Tecnologia2",
                    link: ""
                },
                {
                    name: "Tecnologia3",
                    link: ""
                },
                {
                    name: "Tecnologia4",
                    link: ""
                }
            ]
        },
        {
            name: "Favoritos", 
            Icon: <FiHeart/>,
            list: [
                {
                    name: "Favoritos1",
                    link: ""
                },
                {
                    name: "Favoritos2",
                    link: ""
                },
                {
                    name: "Favoritos3",
                    link: ""
                },
                {
                    name: "Favoritos4",
                    link: ""
                }
            ]
        }
    ]

    useEffect(()=>{
        addCart({id: 1, name: "Telefono1", image: tableta1, category: 'Limpieza', description: 'productos de limpieza', price: 10, stock: 10})
    }, []);

    useEffect(()=>{
        if(location.pathname === "/auth"){
            setNabvarAuth(true);
        }else{
            setNabvarAuth(false);
        }
    }, [location.pathname]);

    const handlerClick = ()=>{
        setSideMenu(!sideMenu);
    }

    return(
        <div className="navbar-background">
            <nav className={`navbar ${navbarAuth ? "navbar-auth-flex-active" : ""} container`}>
                <FiAlignJustify className={`navbar-menu-icon ${navbarAuth ? "navbar-auth-active" : ""}`} onClick={handlerClick}/>
                <div className="navbar-list1">
                    <Link className="navbar-list1-item-link" to="">
                        <img className="navbar-list1-item-image" src={logo} alt="logo de la pagina" />
                    </Link>
                </div>
                <div className={`navbar-list2-item-link-container navbar-list2-item-link-container-movil ${navbarAuth ? "navbar-auth-active" : ""}`}>
                        <Link className="navbar-list2-item-link" to="">
                            <FiShoppingCart className="navbar-list2-item-icon-cart"/> 
                        </Link>
                        <div className="navbar-list2-cart-item-link-submenu">
                            <Card listProducts={cart}/>
                        </div>
                </div>
                <Search className={`navbar-search ${navbarAuth ? "navbar-auth-active" : ""}`}/>
                <div className={`navbar-list2 ${navbarAuth ? "navbar-auth-active" : ""}`}>
                    <Link className="navbar-list2-item-link" to="">
                        <FiHeart className="navbar-list2-item-icon-heart"/>
                    </Link>
                    {
                        !user && 
                            <Link className="navbar-list2-item-link-user" to="/auth">
                                Resgistrarse
                            </Link>
                    }
                    <div className="navbar-list2-item-link-user-container">
                        <Link className="navbar-list2-item-link-user" to="">
                            {
                                user && <FiUser className="navbar-list2-item-icon-user"/>
                            } 
                            {
                                user ? 
                                <span>{user.name}</span>
                                : <span>Mi Cuenta</span>    
                            }
                            <FiChevronDown className="navbar-list2-item-icon-arrow"/>
                        </Link>
                        <div className="navbar-list2-item-link-user-submenu">
                            {
                                user ?
                                <SubMenuAccount/>
                                : <SubMenuNoAccount/>
                            }
                        </div>
                    </div>
                    <div className="navbar-list2-item-link-container">
                        <Link className="navbar-list2-item-link" to="">
                            <FiShoppingCart className="navbar-list2-item-icon-cart"/> 
                        </Link>
                        <div className="navbar-list2-cart-item-link-submenu">
                            <Card listProducts={cart}/>
                        </div>
                    </div>
                </div>
                <MenuMovil listMenu={listMenuMovil} user={user} stateSideMenu={sideMenu} handlerClick={handlerClick}/>
                <div className={`navbar-dark-filter ${sideMenu ? "navbar-dark-filter-active": ""}`}></div>
            </nav>
        </div>
    )
}
