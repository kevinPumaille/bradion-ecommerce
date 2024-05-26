import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { selectBooks } from './core/state/selectors/books.selectors';
import { Producto } from './core/models/producto.model';
import { selectCartState } from './core/state/selectors/carrito.selector';
import { addProduct, clearCart, removeProduct } from './core/state/actions/carrito.action';
import { CartState } from './core/models/carrito.model';
import { loadProduct } from './core/state/actions/apiProductos.action';
import { selectApiProductos, selectBookCollection } from './core/state/selectors/apiProductos.selector';
import { ApiProductosState } from './core/models/apiProductos.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  store = inject(Store<Producto>);
  bookList$: Observable<CartState> = this.store.select(selectCartState);
  // productosList$: Observable<ApiProductosState> = this.store.select(selectApiProductos);
  // productosList2$: Observable<Producto[]> = this.store.select(selectBookCollection);

  constructor() {
  }

  ngOnInit(): void {
    // this.store.dispatch(loadProduct())
  }
  

  increment() {
    this.store.dispatch(addProduct({
      producto: {
        id: 4,
        nombre: 'Sandalias Delia',
        precio: 20,
        urlImagen: "../../../../assets/productos/sandalias_delia_para_ninas.jpg"
    }
    }));
    this.store.dispatch(addProduct({
      producto: {
        id: 3,
        nombre: 'Sandalias Delia',
        precio: 20,
        urlImagen: "../../../../assets/productos/sandalias_delia_para_ninas.jpg"
    }
    }));
  }

  decrement() {
    this.store.dispatch(removeProduct({ productoId: 4 }));
  }

  reset() {
    this.store.dispatch(clearCart({ productoId: 4 }));
  }
}
