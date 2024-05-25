import { Producto } from "./producto.model";

export interface CartItem {
    producto: Producto;
    cantidad: number;
}

export interface CartState {
    items: CartItem[];
    total: number;
    error: any;
}

