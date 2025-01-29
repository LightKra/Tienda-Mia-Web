export type User = {
    id: number,
    name: string,
    email: string,
    address: string,
    image: string,
    password?: string,
    role: string,
    create_at?: Date
}

export type RefreshToken = {
    id: number,
    user_id: number,
    refresh_Token: string
    create_at?: Date
}

export type Product = {
    id: number, 
    name: string,
    category: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    create_at?: Date
}
export type Order = {
    id: number,
    user_id: number,
    total_amount: number,
    status: string,
    create_at?: Date
}

export type OrderItem = {
    id: number,
    order_id: number,
    product_id: number,
    quantity: number,
    price: number
}
export type Invoice = {
    id: number,
    order_id: number,
    invoice_date: Date,
    total_amount: number
}