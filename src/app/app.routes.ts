import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NinosPageComponent } from './pages/ninos-page/ninos-page.component';
import { NinasPageComponent } from './pages/ninas-page/ninas-page.component';
import { HombresPageComponent } from './pages/hombres-page/hombres-page.component';
import { MujeresPageComponent } from './pages/mujeres-page/mujeres-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    { path: '', 
        component: MainLayoutComponent,
        children: [
            { path: '', component: MainComponent},
            { path: 'niños', component: NinosPageComponent},
            { path: 'niñas', component: NinasPageComponent},
            { path: 'hombres', component: HombresPageComponent},
            { path: 'mujeres', component: MujeresPageComponent},
            { path: '**', redirectTo: ''}
        ]
    },
    
];
