import { createReducer, on } from '@ngrx/store';
import { ApiProductosState } from '../../models/apiProductos.model';
import { loadProduct, loadedProduct } from '../actions/apiProductos.action';
import { Producto } from '../../models/producto.model';




export const initialState: ApiProductosState = {
    productos: [],
    loading: false
};

export const productosApiReducer = createReducer(
    initialState,
    on(loadProduct, (_state) => _state ),
    on(loadedProduct, (_state, { productos }) => { 
        const updatedProductos: Producto[] = [..._state.productos, ...productos];
        return {
            ..._state,
            productos: updatedProductos,
            loading: true
        }
     } ),
);