import { Component, inject, input } from '@angular/core';
import { Producto } from '../../core/models/producto.model';
import { CartItem } from '../../core/models/carrito.model';
import { Store } from '@ngrx/store';
import { addProduct, clearCart, removeProduct } from '../../core/state/actions/carrito.action';

@Component({
  selector: 'app-product-card-dos',
  standalone: true,
  imports: [
  ],
  templateUrl: './product-card-dos.component.html',
  styleUrl: './product-card-dos.component.css'
})
export class ProductCardDosComponent {

  store = inject( Store );

  productoItem = input<CartItem>();

  sumarProducto(producto: Producto){
    this.store.dispatch(addProduct({producto}));
  }

  restarProducto(productoId: number){
    this.store.dispatch(removeProduct({productoId}));
  }
  
  limpiarProducto(productoId: number){
    this.store.dispatch(clearCart({productoId}));
  }
}
