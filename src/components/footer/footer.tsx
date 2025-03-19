import React from "react";
import { ButtonRed } from "../buttonRed/buttonRed";
import { Input } from "../input/input";
import './footer.css'
import { FiMail, FiCheck } from "react-icons/fi";
import certificadoSeguridad from '../../assets/certificadoSeguridad.svg'
import { TreeView } from "../treeView/treeView";
import { footerData } from "./footerData";
import { Divider } from "../divider/divider";
import { ListPaymentMethodIcon } from "../listPaymentMethodIcon/listPaymentMethodIcon";
import { footerDataListPaymentMethod } from "./footerData";
import { SocialNetworks } from "../socialNetworks/socialNetworks";
import { SliderBrands } from "../sliderBrands/sliderBrands";

export const Footer: React.FC = ()=>{

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        event
    }

    const handleClick = ()=>{

    }

    return(
        <footer className="footer-background">
            <div className="container">
                <div className="footer">
                    <section>
                        <h3 className="footer-brands-title">Marcas Mas Buscadas</h3>
                        <SliderBrands/>
                    </section>
                    <section>
                        <div className="footer-card">
                            <div>
                                <p className="footer-card-title">¡Suscríbete a nuestro Newsletter!</p>
                                <div className="footer-card-email">
                                    <Input size="full" placeHolder="¡Ingresa tu email!" handlerChange={handlerChange}/>
                                </div>
                            </div>
                            <div>
                                <ButtonRed 
                                textButton="Recibir ofertas"
                                Icon={FiMail} 
                                onClick={handleClick}/>
                            </div>
                            <div>
                                <p className="footer-card-title">Síguenos en nuestras redes</p>
                                <SocialNetworks/>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="footer-more-information">
                            <div>
                                <p className="footer-more-information-title">Informacion Util</p>
                                <ul className="footer-more-information-list footer-more-information-list-cursor">
                                    <li>Que es tiendamia?</li>
                                    <li>Sell on Tiendamia</li>
                                    <li>Blog</li>
                                    <li>Centro de ayuda en linea</li>
                                    <li>Medio de pago</li>
                                    <li>Terminos y condiciones</li>
                                    <li>Informacion de aduanas</li>
                                    <li>Politicas de devolucion de productos</li>
                                    <li>Marcas</li>
                                </ul>
                            </div>
                            <div>
                                <p className="footer-more-information-title">Centro de Ayuda</p>
                                <ul className="footer-more-information-list footer-more-information-list-cursor">
                                    <li>Preguntas frecuentes</li>
                                    <li>Enviar mensaje</li>
                                    <li>Propiedad intelectual</li>
                                    <li>Politica calidad</li>
                                </ul>
                                <div>
                                    <p className="footer-more-information-list-schedule-title">Visita nuestro centro de ayuda en línea para contactarnos.</p>
                                    <p className="footer-more-information-list-schedule footer-more-information-list-text-light">De Lunes a Sábados en el horario de 07:00 a 17:00 hs Domingos de 09:00 a 13:00 hs. *Recuerda ingresar a tu cuenta de Tiendamia para tener una experiencia personalizada y acceder a más información.</p>
                                </div>
                            </div>
                            <div>
                                <p className="footer-more-information-title">Todo en un solo lugar</p>
                                <ul className="footer-more-information-list footer-more-information-list-text-light">
                                    <li><FiCheck/> Envio asegurado</li>
                                    <li><FiCheck/> Garantia de entrega</li>
                                    <li><FiCheck/> Productos originales</li>
                                    <li><FiCheck/> El mejor precio</li>
                                    <li><FiCheck/> Compra facil, rapido y seguro</li>
                                </ul>
                            </div>
                            <div>
                                <p className="footer-more-information-title">Comprá con tranquilidad</p>
                                <p className="footer-more-information-list-text-light">Tiendamia cuenta con los certificados verificados para garantizar la seguridad de la compra.</p>
                                <img src={certificadoSeguridad} alt="seguridad trust guard"/>
                            </div>
                        </div>
                        <div className="footer-more-information-tree-view">
                            {
                                footerData.map(item=>(
                                    <TreeView 
                                    key={item.id} 
                                    size="full" 
                                    name={item.name} 
                                    Icon={item.Icon} 
                                    listItems={item.listItems}
                                    className="footer-tree-view"/>
                                ))
                            }
                        </div>
                    </section>
                    <section>
                        <Divider/>
                    </section>
                    <section>
                        <h4 className="footer-payment-title">Metodos de pago</h4>
                        <ListPaymentMethodIcon listImages={footerDataListPaymentMethod}/>
                    </section>
                </div>
            </div>
            <div className="footer-lower"> 
                <div className="container">
                    <p>
                    © 2014 - 2025 - Tiendamia - Todos los derechos reservados - Todas las marcas son propiedad de sus respectivos dueños
                    </p>
                </div>
            </div>  
        </footer>
    )
}