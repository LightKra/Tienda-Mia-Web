import { useEffect, useState } from "react"
import { findProducts } from "../../services/product.services";
import { Slider } from "../../components/slider/slider";
import { Product } from "../../types/models"; 
import { ButtonLink } from "../../components/buttonLink/buttonLink";
import './home.css';
import ofertas from '../../assets/Ofertas.png'
import { portadas } from "./data";
import { SliderProducts } from "../../components/sliderProducts/sliderProducts";
import { ListCardProductV1 } from "../../components/listCardProductV1/listCardProductV1";
import { listItemProductsSilder } from "./data";
import { ListCardProductV1Data } from "./data";

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
        <div className="main-home-container">  
            <section className="home-swiper-container">
                <Slider listImages={portadas}/>
            </section>
            <section>
                <img className="home-offers-image" src={ofertas} alt="Ofertas recomendadas"/>
            </section>
            <section>
                <h2 className="home-title">Los más vendidos <ButtonLink textButton="Ver mas" link="#"/> </h2>
                <SliderProducts listItem={listItemProductsSilder}/>
            </section>
            <section>
                <h2 className="home-title">Productos Recomendados.</h2>
                <ListCardProductV1 listItem={ListCardProductV1Data}/>
            </section>
        </div>
    )
}