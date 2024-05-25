import { Component, OnInit } from '@angular/core';
import { NavBarMainLayoutComponent } from '../layouts/nav-bar-main-layout/nav-bar-main-layout.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterMainLayoutComponent } from '../layouts/footer-main-layout/footer-main-layout.component';

interface Slider{
  img: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavBarMainLayoutComponent,
    FooterMainLayoutComponent,
    CarouselModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  // sliders: Slider[] = [];
  sliders: string[] = [];
  responsiveOptions: any[] | undefined;

  carouselMarcas: string[] = [];
  responsiveOptions2: any[] | undefined;

  ngOnInit(): void {

    this.sliders = [
      '../../../assets/carousel1.jpeg',
      '../../../assets/carousel2.jpeg',
      '../../../assets/carousel4.webp',
      '../../../assets/carousel5.webp',
      '../../../assets/carousel6.webp',
      '../../../assets/carousel7.webp',
    ];

    this.carouselMarcas = [
      '../../../assets/marcas/marca1.webp',
      '../../../assets/marcas/marca2.webp',
      '../../../assets/marcas/marca3.webp',
      '../../../assets/marcas/marca4.webp',
      '../../../assets/marcas/marca5.webp',
      '../../../assets/marcas/marca6.webp',
      '../../../assets/marcas/marca7.webp',
      '../../../assets/marcas/marca8.webp',
      '../../../assets/marcas/marca9.webp',
      '../../../assets/marcas/marca10.webp',
      '../../../assets/marcas/marca11.webp',
      '../../../assets/marcas/marca12.webp',
    ];

    this.responsiveOptions = [
      {
          breakpoint: '2100px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  this.responsiveOptions2 = [
    {
        breakpoint: '2100px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 2
    }
];

  }
  
}
