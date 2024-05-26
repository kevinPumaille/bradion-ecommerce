import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Producto } from '../../models/producto.model';
import { ApiProductosState } from '../../models/apiProductos.model';

export const selectApiProductos = createFeatureSelector<ApiProductosState>('productosApi');


export const selectProductHombres = createSelector(
    selectApiProductos,
    (state) => state.hombres
);
export const selectProductMujeres = createSelector(
    selectApiProductos,
    (state) => state.mujeres
);
export const selectProductNinos = createSelector(
    selectApiProductos,
    (state) => state.niños
);
export const selectProductNinas = createSelector(
    selectApiProductos,
    (state) => state.niñas
);