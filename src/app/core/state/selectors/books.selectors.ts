import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Producto } from '../../models/producto.model';

export const selectProductos = createFeatureSelector<Producto[]>('productos');


export const selectBookCollection = createSelector(
    selectProductos,
    (state: Producto[]) => state
    // selectCollectionState,
    // (books, collection) => {
    //     return collection.map((id) => books.find((book) => book.id === id)!);
    // }
);