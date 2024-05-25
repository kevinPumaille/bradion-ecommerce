import { Component, OnInit } from '@angular/core';
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
  selector: 'app-mujeres-page',
  standalone: true,
  imports: [
    ProductCardUnoComponent
  ],
  templateUrl: './mujeres-page.component.html',
  styleUrl: './mujeres-page.component.css'
})
export class MujeresPageComponent implements OnInit{

  productos: Producto[] = [];
  productosLoading: string[] = ["","","","","","",""];
  loading: boolean = true;

  ngOnInit(): void {
    // setTimeout( () => {
      this.productos = [
        { idProducto: 10, nombreProducto: 'Sandalias Mylls', precioProducto: 20,urlImagen:"../../../../assets/productos/sandalias_mylls_para_mujer.jpg" },
        { idProducto: 11, nombreProducto: 'Zapatos casuales', precioProducto: 30,urlImagen:"../../../../assets/productos/zapatos_casuales_para_mujer.jpg" },
        { idProducto: 12, nombreProducto: 'Botines Taylor', precioProducto: 50,urlImagen:"../../../../assets/productos/botines_taylor_para_mujer.jpg" },
      ];
      this.loading = false;
    // }, 1000)
    
  }
}
