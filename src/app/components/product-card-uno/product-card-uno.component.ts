import { Component, input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';


interface Producto{
  idProducto: number;
  nombreProducto: String;
  precioProducto: number;
  cantidadProducto?: number;
  precioTotal?: number;
  urlImagen?: string;
}

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

  loading = input(true);
  productoItem = input<Producto>();

  
}
