import { createAction, props } from '@ngrx/store';
import { Producto } from '../../models/producto.model';

export const addProduct = createAction(
    '[Cart] Add Product',
    props<{ producto: Producto }>()
);

export const removeProduct = createAction(
    '[Cart] Remove Product',
    props<{ productoId: number }>()
);
export const clearCart = createAction(
    '[Cart] Clear Product',
    props<{ productoId: number }>()
);
