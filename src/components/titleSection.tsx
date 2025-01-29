import React from "react"
import { TitleSectionProps } from "../types/components"


export const TitleSection: React.FC<TitleSectionProps> = ({title})=>{
    return(
        <div>Titulo seccion {title}</div>
    )
}