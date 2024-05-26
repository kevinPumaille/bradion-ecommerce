import { Component, OnInit, inject, input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { Producto } from '../../core/models/producto.model';
import { Store } from '@ngrx/store';
import { addProduct } from '../../core/state/actions/carrito.action';

@Component({
  selector: 'app-product-card-uno',
  standalone: true,
  imports: [
    SkeletonModule
  ],
  templateUrl: './product-card-uno.component.html',
  styleUrl: './product-card-uno.component.css'
})
export class ProductCardUnoComponent {

  store = inject( Store );

  // cardItem$: Observable<CartState> = this.store.select(selectCartState);

  loading = input(true);
  productoItem = input<Producto>();

  agregarProducto() {
    console.log(this.productoItem())
    this.store.dispatch(addProduct({producto: this.productoItem()! }));
  }
}
