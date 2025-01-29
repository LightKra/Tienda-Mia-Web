import {create} from 'zustand'
import { StorageCart } from '../types/storageCart';

export const useStorageCart = create<StorageCart>((set, get)=>{
    return{
        cart:[],
        add: (product)=>{
            const stateCart = get().cart;
            const index = stateCart.findIndex(item=>item.id===product.id);
            if(index === -1){
                set({
                        cart: [
                            ...stateCart,
                            product
                        ]
                });
            }else{
                const newState = structuredClone(stateCart);
                newState[index] = product;
                set({cart: newState})
            }
        },
        remove: (id)=>{
            const stateCart = get().cart;
            const newStateCart = stateCart.filter(item=>item.id!==id);
            set({cart: newStateCart});
        }
    }
})