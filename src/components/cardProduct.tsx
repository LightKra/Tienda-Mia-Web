import React from "react";
import { CardProductProps } from "../types/components";
import { ButtonRed } from "./buttonRed/buttonRed";

export const CardProduct: React.FC<CardProductProps> = ({name, description, image})=> {
  const handlerClickAgregar = ()=>{
    console.log('agregar');
  }
  const handlerClickQuitar = ()=>{
    console.log("quitar");
  }
  return (
    <div>
      <p>{`${name}-${description}-${image}`}</p>
      <ButtonRed handlerClick={handlerClickAgregar} textButton="Agregar" />
      <ButtonRed handlerClick={handlerClickQuitar} textButton="Quitar"/>
    </div>
  );
}