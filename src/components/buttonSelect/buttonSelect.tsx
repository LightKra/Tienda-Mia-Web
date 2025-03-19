import React from "react"
import { ButtonSelectProps } from "../../types/components"

export const ButtonSelect: React.FC<ButtonSelectProps> = ({
    listOptions, 
    className=""
})=>{
    return(
        <select name="listoptions" className={className}>
            {
                listOptions.map(item=>(
                    <option key={item} value={item}>{item}</option>
                ))
            }
        </select>
    )
}