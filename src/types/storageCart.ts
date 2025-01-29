import { Product } from "./models"

export type StorageCart = {
    cart: Product[],
    add: (product: Product)=> void, 
    remove: (id: number) =>void
}