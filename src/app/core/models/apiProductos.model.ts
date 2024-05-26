import { Producto } from "./producto.model";


export interface CategoriaProductos {
    productos: Producto[];
    loading: boolean;
}

export interface ApiProductosState {
    niños: CategoriaProductos;
    niñas: CategoriaProductos;
    hombres: CategoriaProductos;
    mujeres: CategoriaProductos;
}