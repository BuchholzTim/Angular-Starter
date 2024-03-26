import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { TypicodeStoreComponent } from '../typicode-with-store/typicode-store.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [CounterComponent, TypicodeStoreComponent, RouterLink],
})
export class HomePageComponent {}
