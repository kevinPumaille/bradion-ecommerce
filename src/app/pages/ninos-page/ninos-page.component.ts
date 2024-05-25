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
  selector: 'app-ninos-page',
  standalone: true,
  imports: [
    ProductCardUnoComponent
  ],
  templateUrl: './ninos-page.component.html',
  styleUrl: './ninos-page.component.css'
})
export class NinosPageComponent {

  productos: Producto[] = [];
  productosLoading: string[] = ["","","","","","",""];
  loading: boolean = true;

  ngOnInit(): void {
    // setTimeout( () => {
      this.productos = [
        { idProducto: 2, nombreProducto: 'Sandalias de batman', precioProducto: 30,urlImagen:"../../../../assets/productos/sandalias_batman_para_nino.jpg" },
        { idProducto: 3, nombreProducto: 'Zapatos oliver', precioProducto: 50,urlImagen:"../../../../assets/productos/zapatos_oliver_ox_para_ninos_p.jpg" },
        { idProducto: 4, nombreProducto: 'Tenis space', precioProducto: 50,urlImagen:"../../../../assets/productos/tenis_space_para_ninos_pequeno.jpg" }
      ];
      this.loading = false;
    // }, 1000)
    
  }
}
