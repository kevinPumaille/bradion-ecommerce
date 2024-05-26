import { createReducer, on } from '@ngrx/store';
import { ApiProductosState } from '../../models/apiProductos.model';
import { loadHombresProduct, loadMujeresProduct, loadNinasProduct, loadNinosProduct, loadedHombresProduct, loadedMujeresProduct, loadedNinasProduct, loadedNinosProduct } from '../actions/apiProductos.action';

export const initialState: ApiProductosState = {
    niños: {
        productos: [],
        loading: false
    },
    niñas: {
        productos: [],
        loading: false
    },
    hombres: {
        productos: [],
        loading: false
    },
    mujeres: {
        productos: [],
        loading: false
    }
};

export const productosApiReducer = createReducer(
    initialState,
    on(loadHombresProduct, (_state) => _state ),
    on(loadedHombresProduct, (_state, { productos }) => { return { ..._state, hombres: {productos, loading: true}, } } ),
    on(loadMujeresProduct, (_state) => _state ),
    on(loadedMujeresProduct, (_state, { productos }) => { return { ..._state, mujeres: {productos, loading: true}, } } ),
    on(loadNinasProduct, (_state) => _state ),
    on(loadedNinasProduct, (_state, { productos }) => { return { ..._state, niñas: {productos, loading: true}, } } ),
    on(loadNinosProduct, (_state) => _state ),
    on(loadedNinosProduct, (_state, { productos }) => { return { ..._state, niños: {productos, loading: true}, } } ),
);