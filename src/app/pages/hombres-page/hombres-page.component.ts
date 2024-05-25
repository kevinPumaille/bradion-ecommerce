import { Component } from '@angular/core';
import { ProductCardUnoComponent } from '../../components/product-card-uno/product-card-uno.component';

interface Producto{
  idProducto: number;
  nombreProducto: String;
  precioProducto: number;
  cantidadProducto?: number;
  precioTotal?: number;
  urlImagen?: string;
}

@Component({
  selector: 'app-hombres-page',
  standalone: true,
  imports: [
    ProductCardUnoComponent
  ],
  templateUrl: './hombres-page.component.html',
  styleUrl: './hombres-page.component.css'
})
export class HombresPageComponent {

  productos: Producto[] = [];
  productosLoading: string[] = ["","","","","","",""];
  loading: boolean = true;

  ngOnInit(): void {
    // setTimeout( () => {
      this.productos = [
        { idProducto: 7, nombreProducto: 'Zapatos Casuales', precioProducto: 20,urlImagen:"../../../../assets/productos/zapatos_casuales.jpg" },
    { idProducto: 8, nombreProducto: 'Zapatos de vestir', precioProducto: 30,urlImagen:"../../../../assets/productos/zapatos_de_vestir.jpg" },
    { idProducto: 9, nombreProducto: 'Botas', precioProducto: 50,urlImagen:"../../../../assets/productos/botas.jpg" }
      ];
      this.loading = false;
    // }, 1000)
    
  }
}
