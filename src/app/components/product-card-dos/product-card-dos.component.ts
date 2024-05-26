import { Component, input } from '@angular/core';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-product-card-dos',
  standalone: true,
  imports: [
  ],
  templateUrl: './product-card-dos.component.html',
  styleUrl: './product-card-dos.component.css'
})
export class ProductCardDosComponent {

  productoItem = input<Producto>();

}
