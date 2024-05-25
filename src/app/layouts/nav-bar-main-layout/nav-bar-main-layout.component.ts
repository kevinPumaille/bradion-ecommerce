import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ProductCardDosComponent } from '../../components/product-card-dos/product-card-dos.component';

@Component({
  selector: 'app-nav-bar-main-layout',
  standalone: true,
  imports: [
    SidebarModule,
    RouterLink,
    ProductCardDosComponent
  ],
  templateUrl: './nav-bar-main-layout.component.html',
  styleUrl: './nav-bar-main-layout.component.css'
})
export class NavBarMainLayoutComponent {
  sidebarVisible: boolean = false;
  sidebarCarritoVisible: boolean = false;

  cerrarSideBar(){
    this.sidebarVisible = false;
  }
}
