import { useEffect, useState } from "react"
import { findProducts } from "../services/product.services";
import { Slider } from "../components/slider";
import { ListProduct } from "../components/listProducts";
import { TitleSection } from "../components/titleSection";
import { Product } from "../types/models"; 

export const Home = ()=>{
    const [productsDestacado, setProductsDestacado] = useState<Product[]>([]);
    const [productsTecnologicos, setProductsTecnologicos] = useState([]);
    const [productsRopa, setProductsRopa] = useState([]);

    useEffect(()=>{
        findProducts().then(data=>{
            setProductsDestacado(data);
        });

    },[]);

    return(
        <>  
            <Slider/>
            <main>
                <TitleSection title="Destacado"/>
                <ListProduct products={productsDestacado}/>
                <TitleSection title="Tecnologia"/>
                <ListProduct products={productsTecnologicos}/>
                <TitleSection title="Ropa"/>
                <ListProduct products={productsRopa}/>
            </main>
            
        </>
    )
}