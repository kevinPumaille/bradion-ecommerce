import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Producto } from '../../models/producto.model';
import { ApiProductosState } from '../../models/apiProductos.model';

export const selectApiProductos = createFeatureSelector<ApiProductosState>('productosApi');


export const selectBookCollection = createSelector(
    selectApiProductos,
    (state) => state.productos
);