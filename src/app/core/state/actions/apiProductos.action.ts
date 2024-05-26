import { createAction, props } from '@ngrx/store';
import { Producto } from '../../models/producto.model';

export const loadProduct = createAction(
    '[Producto List] Load Productos',
);

export const loadedProduct = createAction(
    '[Producto List] Loaded Success',
    props<{ productos: Producto[] }>()
);
