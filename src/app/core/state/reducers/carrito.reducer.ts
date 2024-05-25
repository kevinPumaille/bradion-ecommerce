import { createReducer, on, Action } from '@ngrx/store';
import { addProduct, removeProduct, clearCart } from '../actions/carrito.action';
import { CartState } from '../../models/carrito.model';


export const initialState: CartState = {
    items: [],
    total: 0,
    error: null
};

export const cartReducer = createReducer(
    initialState,
    on(addProduct, (state, { producto }) => {
        const existingItem = state.items.find(item => item.producto.id === producto.id);
        let updatedItems;

        if (existingItem) {
            updatedItems = state.items.map(item =>
                item.producto.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
        } else {
            updatedItems = [...state.items, { producto, cantidad: 1 }];
        }

        const total = updatedItems.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0);

        return {
            ...state,
            items: updatedItems,
            total
        };
    }),
    on(removeProduct, (state, { productoId }) => {
        const existingItem = state.items.find(item => item.producto.id === productoId);

        if (!existingItem) return state;

        const updatedItems = existingItem.cantidad > 1
            ? state.items.map(item =>
                item.producto.id === productoId ? { ...item, cantidad: item.cantidad - 1 } : item
            )
            : state.items.filter(item => item.producto.id !== productoId);

        const total = updatedItems.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0);

        return {
            ...state,
            items: updatedItems,
            total
        };
    }),
    on(clearCart, state => initialState)
);

// export function cartReducer(state: CartState | undefined, action: Action) {
//     return _cartReducer(state, action);
// }
