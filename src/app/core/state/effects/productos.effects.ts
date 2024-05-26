import { Injectable, OnInit, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap, exhaustMap } from 'rxjs/operators';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';
import { loadedProduct } from '../actions/apiProductos.action';

@Injectable()
export class ProductosEffects{
    

    productosService = inject(ProductosService);
    actions$ = inject(Actions);

    productosMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[Producto List] Load Productos'),
        exhaustMap(() => this.productosService.productosHombreList()
            .pipe(
                map( (productos: Producto[]) => {
                    return loadedProduct({productos});
                }
            ),
                catchError(() => EMPTY)
            ))
    )
    );

}