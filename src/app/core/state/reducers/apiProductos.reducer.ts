import { createReducer, on } from '@ngrx/store';
import { ApiProductosState } from '../../models/apiProductos.model';
import { loadProduct, loadedProduct } from '../actions/apiProductos.action';




export const initialState: ApiProductosState = {
    productos: [],
    loading: false
};

export const productosApiReducer = createReducer(
    initialState,
    on(loadProduct, (_state, {  }) => _state ),
    on(loadedProduct, (_state, { productos }) => { return {..._state,productos} } ),
    // on(loadProduct, (_state, {  }) => { return {..._state, loading: true} }),
);