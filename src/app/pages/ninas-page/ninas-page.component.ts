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
  selector: 'app-ninas-page',
  standalone: true,
  imports: [
    ProductCardUnoComponent
  ],
  templateUrl: './ninas-page.component.html',
  styleUrl: './ninas-page.component.css'
})
export class NinasPageComponent {

  productos: Producto[] = [];
  productosLoading: string[] = ["","","","","","",""];
  loading: boolean = true;

  ngOnInit(): void {
    // setTimeout( () => {
      this.productos = [
        { idProducto: 4, nombreProducto: 'Sandalias Delia', precioProducto: 20,urlImagen:"../../../../assets/productos/sandalias_delia_para_ninas.jpg" },
        { idProducto: 66, nombreProducto: 'Botines Rubi', precioProducto: 50,urlImagen:"../../../../assets/productos/botines_rubi_para_nina.jpg" }
      ];
      this.loading = false;
    // }, 1000)
    
  }
}
