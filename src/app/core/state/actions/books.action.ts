import { createActionGroup, props } from '@ngrx/store';
import { Producto } from '../../models/producto.model';


export const ProductosActions = createActionGroup({
  source: 'Productos',
  events: {
    'Add Producto': props<{ producto: Producto }>(),
    'Remove Producto': props<{ productoId: number }>(),
  },
});

export const ProductosApiActions = createActionGroup({
  source: 'Productos API',
  events: {
    'Retrieved Book List': props<{ productos: Producto[] }>(),
  },
});