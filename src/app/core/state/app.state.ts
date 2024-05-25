import { ActionReducerMap } from "@ngrx/store";
import { CartState } from "../models/carrito.model";
import { cartReducer } from "./reducers/carrito.reducer";
import { ApiProductosState } from "../models/apiProductos.model";
import { productosApiReducer } from "./reducers/apiProductos.reducer";


export interface AppState{
    cart: CartState;
    productosApi: ApiProductosState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    cart: cartReducer,
    productosApi: productosApiReducer
}