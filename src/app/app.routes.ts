import { CounterComponent } from '@angular-starter/components/counter/counter.component';
import { HomePageComponent } from '@angular-starter/components/home-page/home-page.component';
import { TypicodeStoreComponent } from '@angular-starter/components/typicode-with-store/typicode-store.component';
import { TypicodeComponent } from '@angular-starter/components/typicode/typicode.component';
import {
  HelloEffects,
  helloReducer,
  helloStore,
} from '@angular-starter/store/hello';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

export const routes: Routes = [
  {
    path: '',
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(helloStore, helloReducer),
        EffectsModule.forFeature([HelloEffects])
      ),
    ],
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'counter',
        component: CounterComponent,
      },
      {
        path: 'typicode',
        component: TypicodeComponent,
      },

      {
        path: 'typicode-store',
        component: TypicodeStoreComponent,
      },
    ],
  },
];
