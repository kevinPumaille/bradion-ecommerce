import { Producto } from "./producto.model";

export interface ApiProductosState{
    productos: Producto[];
    loading: boolean;
}