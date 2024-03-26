import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  private counter = 0;

  count(): number {
    return this.counter++;
  }
}
