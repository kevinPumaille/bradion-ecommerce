import { Component } from '@angular/core';
import { NavBarMainLayoutComponent } from '../nav-bar-main-layout/nav-bar-main-layout.component';
import { FooterMainLayoutComponent } from '../footer-main-layout/footer-main-layout.component';
import { MainComponent } from '../../main/main.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    NavBarMainLayoutComponent,
    MainComponent,
    FooterMainLayoutComponent,
    RouterOutlet
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
