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

  productosMujeresList(): Observable<any> {

    const productos: Producto[] = [
      {
        id: 10,
        nombre: 'Sandalias Mylls',
        precio: 20,
        urlImagen: "../../../../assets/productos/sandalias_mylls_para_mujer.jpg"
      },
      {
        id: 11,
        nombre: 'Zapatos casuales',
        precio: 30,
        urlImagen: "../../../../assets/productos/zapatos_casuales_para_mujer.jpg"
      },
      {
        id: 12,
        nombre: 'Botines Taylor',
        precio: 50,
        urlImagen: "../../../../assets/productos/botines_taylor_para_mujer.jpg"
      },
    ];

    return of(productos).pipe(
      delay(1500)
    )
  }

  productosNinosList(): Observable<any> {

    const productos: Producto[] = [
      {
        id: 2,
        nombre: 'Sandalias de batman',
        precio: 30,
        urlImagen: "../../../../assets/productos/sandalias_batman_para_nino.jpg"
      },
      {
        id: 3,
        nombre: 'Zapatos oliver',
        precio: 50,
        urlImagen: "../../../../assets/productos/zapatos_oliver_ox_para_ninos_p.jpg"
      },
      {
        id: 4,
        nombre: 'Tenis space',
        precio: 50,
        urlImagen: "../../../../assets/productos/tenis_space_para_ninos_pequeno.jpg"
      }
    ];

    return of(productos).pipe(
      delay(1500)
    )
  }

  productosNinasList(): Observable<any> {

    const productos: Producto[] = [
      {
        id: 4,
        nombre: 'Sandalias Delia',
        precio: 20,
        urlImagen: "../../../../assets/productos/sandalias_delia_para_ninas.jpg"
      },
      {
        id: 66,
        nombre: 'Botines Rubi',
        precio: 50,
        urlImagen: "../../../../assets/productos/botines_rubi_para_nina.jpg"
      }
    ];

    return of(productos).pipe(
      delay(1500)
    )
  }
}
