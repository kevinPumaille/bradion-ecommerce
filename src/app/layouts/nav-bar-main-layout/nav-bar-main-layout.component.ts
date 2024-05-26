import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ProductCardDosComponent } from '../../components/product-card-dos/product-card-dos.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from '../../core/models/carrito.model';
import { selectCartState } from '../../core/state/selectors/carrito.selector';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar-main-layout',
  standalone: true,
  imports: [
    SidebarModule,
    RouterLink,
    ProductCardDosComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './nav-bar-main-layout.component.html',
  styleUrl: './nav-bar-main-layout.component.css'
})
export class NavBarMainLayoutComponent {

  store = inject( Store );

  carritoList$: Observable<CartState> = this.store.select(selectCartState);

  sidebarVisible: boolean = false;
  sidebarCarritoVisible: boolean = false;

  cerrarSideBar(){
    this.sidebarVisible = false;
  }
}
