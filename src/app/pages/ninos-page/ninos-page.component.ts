import { Component, inject } from '@angular/core';
import { ProductCardUnoComponent } from '../../components/product-card-uno/product-card-uno.component';
import { Producto } from '../../core/models/producto.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriaProductos } from '../../core/models/apiProductos.model';
import { selectProductNinos } from '../../core/state/selectors/apiProductos.selector';
import { loadNinosProduct } from '../../core/state/actions/apiProductos.action';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ninos-page',
  standalone: true,
  imports: [
    ProductCardUnoComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './ninos-page.component.html',
  styleUrl: './ninos-page.component.css'
})
export class NinosPageComponent {

  store = inject(Store);
  productosList$: Observable<CategoriaProductos> = this.store.select(selectProductNinos);

  ngOnInit(): void {
    this.store.dispatch(loadNinosProduct())
  }
}
