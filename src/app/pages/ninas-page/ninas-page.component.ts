import { Component, inject } from '@angular/core';
import { ProductCardUnoComponent } from '../../components/product-card-uno/product-card-uno.component';
import { Producto } from '../../core/models/producto.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriaProductos } from '../../core/models/apiProductos.model';
import { selectProductNinas } from '../../core/state/selectors/apiProductos.selector';
import { loadNinasProduct } from '../../core/state/actions/apiProductos.action';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ninas-page',
  standalone: true,
  imports: [
    ProductCardUnoComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './ninas-page.component.html',
  styleUrl: './ninas-page.component.css'
})
export class NinasPageComponent {

  store = inject(Store);
  productosList$: Observable<CategoriaProductos> = this.store.select(selectProductNinas);

  ngOnInit(): void {
    this.store.dispatch(loadNinasProduct())
  }
}
