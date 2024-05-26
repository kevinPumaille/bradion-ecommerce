import { Component, inject } from '@angular/core';
import { ProductCardUnoComponent } from '../../components/product-card-uno/product-card-uno.component';
import { Store } from '@ngrx/store';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CategoriaProductos } from '../../core/models/apiProductos.model';
import { selectProductHombres } from '../../core/state/selectors/apiProductos.selector';
import { loadHombresProduct } from '../../core/state/actions/apiProductos.action';

@Component({
  selector: 'app-hombres-page',
  standalone: true,
  imports: [
    ProductCardUnoComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './hombres-page.component.html',
  styleUrl: './hombres-page.component.css'
})
export class HombresPageComponent {

  store = inject(Store);
  productosList$: Observable<CategoriaProductos> = this.store.select(selectProductHombres);

  ngOnInit(): void {
    this.store.dispatch(loadHombresProduct())
  }

  
}
