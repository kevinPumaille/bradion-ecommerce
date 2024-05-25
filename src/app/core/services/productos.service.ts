import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  productosHombreList(): Observable<any> {

    const productos: Producto[] = [
      {
        id: 7,
        nombre: 'Zapatos Casuales',
        precio: 20,
        urlImagen: "../../../../assets/productos/zapatos_casuales.jpg"
      },
      {
        id: 8,
        nombre: 'Zapatos de vestir',
        precio: 30,
        urlImagen: "../../../../assets/productos/zapatos_de_vestir.jpg"
      },
      {
        id: 9,
        nombre: 'Botas',
        precio: 50,
        urlImagen: "../../../../assets/productos/botas.jpg"
      }
    ];

    return of(productos).pipe(
      delay(1500)
    )
  }
}
