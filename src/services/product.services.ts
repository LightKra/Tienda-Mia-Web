import { URL_PRODUCT } from "./constants";
import { Product } from "../types/models";

export const findProducts = async (name?: string, priceLow?: number, priceUp?: number, createdAtLow?: Date, createdAtUp?: Date, category?:string, page?: number, limit?: number): Promise<Product[] | never>=>{
    const response = await fetch(URL_PRODUCT.FIND(name, priceLow, priceUp, createdAtLow, createdAtUp, category, page, limit));
    const {result, message} : {result: Product[], message: string}  = await response.json();
    if(response.status === 401){
        throw new Error(`Token expirado: ${message}`);
    }
    return result;
}