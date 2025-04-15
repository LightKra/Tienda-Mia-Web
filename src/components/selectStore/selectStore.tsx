import React, { useState } from "react";
import { ButtonRed } from "../buttonRed/buttonRed";
import './selectStore.css'

export const SelectStore: React.FC = ()=>{
    const [selectButton, setSelectButton] = useState<number>(0);

    const handleClick = (id: number) => ()=>{
        setSelectButton(id);
    }

    return (
        <div className="select-store-container">
            <div className="select-store container">
                <h3>Resultados de busquedas en </h3>
                <ButtonRed 
                textButton="Amazon" 
                border="rounded" 
                size="auto" 
                onClick={handleClick(0)}
                backgroundColor={selectButton === 0 ? 'red' : 'white'}/>
                <ButtonRed 
                textButton="Ebay" 
                border="rounded" 
                size="auto" 
                backgroundColor={selectButton === 1 ? 'red' : 'white'}
                onClick={handleClick(1)}
                />
                <ButtonRed 
                textButton="China" 
                border="rounded" 
                size="auto" 
                backgroundColor={selectButton === 2 ? 'red' : 'white'}
                onClick={handleClick(2)}
                />
            </div>
        </div>
        
    )
}