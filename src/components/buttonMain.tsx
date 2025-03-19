import React from "react"
import { ButtonRed } from "./buttonRed/buttonRed"
import { ButtonMainProps } from "../types/components"

export const ButtonMain: React.FC<ButtonMainProps> = ({textButton, onClick})=>{
    return(
        <ButtonRed textButton={textButton} onClick={onClick}/>
    )
}