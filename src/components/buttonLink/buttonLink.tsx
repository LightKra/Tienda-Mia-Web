import React from "react";
import { Link } from "react-router";
import { ButtonLinkProps } from "../../types/components";
import './buttonLink.css'

export const ButtonLink: React.FC<ButtonLinkProps> = ({
    textButton, 
    link, 
    className=""
})=>{
    return(
        <Link className={`button-link ${className}`} to={link}>{textButton}</Link>
    )
}