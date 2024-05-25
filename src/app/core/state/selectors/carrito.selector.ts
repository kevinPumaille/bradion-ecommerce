import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from '../../models/carrito.model';

// Selecciona el estado del carrito
export const selectCartState = createFeatureSelector<CartState>('cart');

// Selecciona los elementos del carrito
export const selectCartItems = createSelector(
    selectCartState,
    (state: CartState) => state.items
);

// Selecciona el total del carrito
export const selectCartTotal = createSelector(
    selectCartState,
    (state: CartState) => state.total
);

// Selecciona el número total de productos en el carrito
export const selectTotalItems = createSelector(
    selectCartItems,
    (items) => items.reduce((sum, item) => sum + item.cantidad, 0)
);
