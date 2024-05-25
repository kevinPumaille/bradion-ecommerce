import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCER } from './core/state/app.state';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ProductosEffects } from './core/state/effects/productos.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(ROOT_REDUCER),
        StoreDevtoolsModule.instrument({ name: 'TEST' }),
        EffectsModule.forRoot([ProductosEffects])
    ]),
    // provideEffects([ProductosEffects])
]
};
