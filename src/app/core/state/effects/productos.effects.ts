import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ProductosService } from '../../services/productos.service';

@Injectable()
export class ProductosEffects {

    productosService = inject(ProductosService);
    actions$ = inject(Actions);

    productosMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[Producto List] Loaded Success'),
        mergeMap(() => this.productosService.productosHombreList()
            .pipe(
                map(productos => ({ type: '[Producto List] Loaded Success', payload: productos })),
                catchError(() => EMPTY)
            ))
    )
    );


}