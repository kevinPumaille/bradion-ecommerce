import { Injectable, OnInit, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap, exhaustMap, take } from 'rxjs/operators';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';
import { loadedHombresProduct, loadedMujeresProduct, loadedNinasProduct, loadedNinosProduct } from '../actions/apiProductos.action';

@Injectable()
export class ProductosEffects{
    

    productosService = inject(ProductosService);
    actions$ = inject(Actions);

    productosHombres$ = createEffect(() => this.actions$.pipe(
        ofType('[Producto Hombres List] Load Productos Hombres'),
        exhaustMap(() => this.productosService.productosHombreList()
            .pipe(
                map( (productos: Producto[]) => {
                    return loadedHombresProduct({productos});
                }
            ),
                catchError(() => EMPTY)
            ))
    )
    );
    
    productosMujeres$ = createEffect(() => this.actions$.pipe(
        ofType('[Producto Mujeres List] Load Productos Mujeres'),
        exhaustMap(() => this.productosService.productosMujeresList()
            .pipe(
                map( (productos: Producto[]) => {
                    return loadedMujeresProduct({productos});
                }
            ),
                catchError(() => EMPTY)
            ))
    )
    );
    
    productosNinos$ = createEffect(() => this.actions$.pipe(
        ofType('[Producto Ninos List] Load Productos Ninos'),
        exhaustMap(() => this.productosService.productosNinosList()
            .pipe(
                map( (productos: Producto[]) => {
                    return loadedNinosProduct({productos});
                }
            ),
                catchError(() => EMPTY)
            ))
    )
    );

    productosNinas$ = createEffect(() => this.actions$.pipe(
        ofType('[Producto Ninas List] Load Productos Ninas'),
        exhaustMap(() => this.productosService.productosNinasList()
            .pipe(
                map( (productos: Producto[]) => {
                    return loadedNinasProduct({productos});
                }
            ),
                catchError(() => EMPTY)
            ))
    )
    );

}