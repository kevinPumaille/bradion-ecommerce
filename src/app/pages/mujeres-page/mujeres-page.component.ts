import { Component, OnInit, inject } from '@angular/core';
import { ProductCardUnoComponent } from '../../components/product-card-uno/product-card-uno.component';
import { Producto } from '../../core/models/producto.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProductMujeres } from '../../core/state/selectors/apiProductos.selector';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CategoriaProductos } from '../../core/models/apiProductos.model';
import { loadMujeresProduct } from '../../core/state/actions/apiProductos.action';



@Component({
  selector: 'app-mujeres-page',
  standalone: true,
  imports: [
    ProductCardUnoComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './mujeres-page.component.html',
  styleUrl: './mujeres-page.component.css'
})
export class MujeresPageComponent implements OnInit{

  store = inject(Store);
  productosList$: Observable<CategoriaProductos> = this.store.select(selectProductMujeres);

  ngOnInit(): void {
    this.store.dispatch(loadMujeresProduct())
  }

  
}
