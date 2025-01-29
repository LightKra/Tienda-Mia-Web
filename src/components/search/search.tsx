import React from 'react'
import './search.css'
import { FiSearch } from "react-icons/fi"
import { ButtonSelect } from '../buttonSelect/buttonSelect'
import { SearchWindow } from '../searchWindow/searchWindow'
import { useRef, useState } from 'react';
import { findProducts } from '../../services/product.services';
import { Product } from '../../types/models'
import { SearchProps } from '../../types/components'

export const Search: React.FC<SearchProps> = ({className})=>{
    const [products, setProducts] = useState<Product[]>([]);
    const listOptions = ["Amazon", "Ebay", "China"];
    const temp = useRef<number | undefined>(undefined);
    const newClassName = className ? className : "";
    
    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const name = event.target.value;
        if(!name){
            return setProducts([]);
        }
        if(temp.current){
            clearTimeout(temp.current);
        }
        temp.current = setTimeout(()=>{
            findProducts(name,undefined,undefined,undefined,undefined,undefined,undefined,5).then(data=>{
                setProducts(data);
            })
        }, 500);
    }

    return(
        <div className={`search ${newClassName}`}>
            <ButtonSelect className="search-options" listOptions={listOptions}/>
            <div className='search-input-container'>  
                <input className="search-input" onChange={handlerChange} type="text" name="search" placeholder="Buscar entre mil millones de productos"/>
                <SearchWindow listMenu={products}/>
            </div>
            <FiSearch className='search-icon'/>
        </div>
    )
}