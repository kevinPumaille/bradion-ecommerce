import { createAction, props } from '@ngrx/store';
import { Producto } from '../../models/producto.model';

export const loadHombresProduct = createAction(
    '[Producto Hombres List] Load Productos Hombres',
);


export const loadedHombresProduct = createAction(
    '[Producto Hombres List] Loaded Success Hombres',
    props<{ productos: Producto[] }>()
);


export const loadMujeresProduct = createAction(
    '[Producto Mujeres List] Load Productos Mujeres',
);

export const loadedMujeresProduct = createAction(
    '[Producto Mujeres List] Loaded Success Mujeres',
    props<{ productos: Producto[] }>()
);


export const loadNinasProduct = createAction(
    '[Producto Ninas List] Load Productos Ninas',
);

export const loadedNinasProduct = createAction(
    '[Producto Ninas List] Loaded Success Ninas',
    props<{ productos: Producto[] }>()
);


export const loadNinosProduct = createAction(
    '[Producto Ninos List] Load Productos Ninos',
);

export const loadedNinosProduct = createAction(
    '[Producto Ninos List] Loaded Success Ninos',
    props<{ productos: Producto[] }>()
);



