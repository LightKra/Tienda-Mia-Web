export const URL_API = "http://localhost:3000";

export const URL_AUTH = {
    LOGIN: `${URL_API}/auth/login`,
    LOGOUT: `${URL_API}/auth/logout`,
    GET_ACCESS_TOKEN: `${URL_API}/auth/get-access-token`
}

export const URL_USER = {
    CREATE: `${URL_API}/users/create`,
    UPDATE: `${URL_API}/users/update`,
    FIND_NAME: (name: string, page?: number, limit?: number) => {
        let url = `${URL_API}/users/find-name/${name}?`;
        if(page){
            url = `${url}page=${page}`;
        }
        if(limit){
            url = `${url}&limit=${limit}`;
        }
        return url;
    },
    FIND_INFO: `${URL_API}/users/find-info`,
    FIND: (page?: number, limit?: number) => {
        let url = `${URL_API}/users/find?`;
        if(page){
            url = `${url}page=${page}`;
        }
        if(limit){
            url = `${url}&limit=${limit}`;
        }
        return url;
    },
    DELETE: `${URL_API}/users/delete`
}
//corregir las funciones se esta pasando el parametro "" cuando no se envia datos para la query  y paraams
export const URL_PRODUCT = {
    CREATE: `${URL_API}/products/create`,
    UPDATE_ID: (id: number) => `${URL_API}/products/update-id/${id}`,
    FIND: (name?: string, priceLow?: number, priceUp?: number, createdAtLow?: Date, createdAtUp?: Date, category?: string, page?: number, limit?: number) => {
        let url = `${URL_API}/products/find?`;
        if(name){
            url = `${url}name=${name}`;
        }
        if(priceLow){
            url = `${url}&pricelow=${priceLow}`;
        }
        if(priceUp){
            url = `${url}&priceup=${priceUp}`;
        }
        if(createdAtLow){
            url = `${url}&createdatlow=${createdAtLow}`;
        }
        if(createdAtUp){
            url = `${url}&createdatup=${createdAtUp}`;
        }
        if(category){
            url = `${url}&category=${category}`;
        }
        if(page){
            url =  `${url}&page=${page}`;
        }
        if(limit){
            url = `${url}&limit=${limit}`;
        }
        return url;
    },
    DELETE_ID: (id: string) => `${URL_API}/products/delete-id/${id}`
}
//falta findJoin
export const URL_ORDER = {
    CREATE: `${URL_API}/orders/create`,
    UPDATE_id: (id: number) => `${URL_API}/orders/update-id/${id}`,
    FIND: (id?: number, userId?: number, amountlow?: number, amountUp?: number, status?: string, createdAtLow?: Date, createdAtUp?: Date, page?: number, limit?: number) => {
        let url = `${URL_API}/products/find?`;
        if(id){
            url = `${url}id=${id}`;
        }
        if(userId){
            url = `${url}&userid=${userId}`
        }
        if(amountlow){
            url = `${url}&amountlow=${amountlow}`;
        }
        if(amountUp){
            url = `${url}&amountup=${amountUp}`;
        }
        if(status){
            url = `${url}&status=${status}`;
        }
        if(createdAtLow){
            url = `${url}&createdatlow=${createdAtLow}`;
        }
        if(createdAtUp){
            url = `${url}&createdatup=${createdAtUp}`;
        }
        if(page){
            url = `${url}&page=${page}`;
        }   
        if(limit){
            url = `${url}&limit=${limit}`;
        }
        return url;
    },
    FIND_PRODUCTS: (id: number, status?: string, createdAtLow?: Date, createdAtUp?: Date, page?: number, limit?: number) => {
        let url = `${URL_API}/orders/find-products/${id}?`;
        if(status){
            url = `${url}status=${status}`;
        }
        if(createdAtLow){
            url = `${url}&createdatlow=${createdAtLow}`;
        }
        if(createdAtUp){
            url = `${url}&createdatup=${createdAtUp}`;
        }
        if(page){
            url = `${url}&page=${page}`;
        }
        if(limit){
            url = `${url}&limit=${limit}`;
        }
        return url;
    },
    DELETE_ID: (id: number) => `${URL_API}/orders/delete-id/${id}`
}

export const URL_ORDER_ITEM = {

}

export const URL_INVOICE = {

}