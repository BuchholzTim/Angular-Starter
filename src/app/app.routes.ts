import { CounterComponent } from '@angular-starter/components/counter/counter.component';
import { StarterComponent } from '@angular-starter/components/starter/starter.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
];
