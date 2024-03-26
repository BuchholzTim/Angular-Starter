import { HelloService } from '@angular-starter/services/hello.service';
import {
  Component,
  WritableSignal,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
})
export class CounterComponent {
  counterInitial = input.required<number>();
  private readonly helloService = inject(HelloService);

  private counter: WritableSignal<number> = signal(0);
  public formattedCounter = computed(() => `Counter: ${this.counter()}`);

  click() {
    this.counter.set(this.helloService.count());
  }
}
