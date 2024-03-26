import { selectUsers, startGetUsers } from '@angular-starter/store/hello';
import { JsonPipe } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-typicode-store',
  templateUrl: './typicode-store.component.html',
  styleUrls: ['./typicode-store.component.scss'],
  standalone: true,
  imports: [JsonPipe],
})
export class TypicodeStoreComponent {
  private readonly store = inject(Store);
  public users = this.store.selectSignal(selectUsers);
  public userCount = computed(() => this.users().length);

  public firstFiveUsers = computed(() => this.users().slice(0, 5));

  constructor() {
    effect(() => console.log(this.userCount()));
  }

  refresh() {
    this.store.dispatch(startGetUsers());
  }
}
