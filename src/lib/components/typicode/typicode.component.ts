import { TypicodeService } from '@angular-starter/services/typicode.service';
import { GetUserResponseDto } from '@angular-starter/types/user.dto';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-typicode',
  templateUrl: './typicode.component.html',
  styleUrls: ['./typicode.component.scss'],
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
})
export class TypicodeComponent {
  private readonly typicodeService = inject(TypicodeService);

  public Users: Observable<GetUserResponseDto> = of([]);

  refresh() {
    this.Users = this.typicodeService.getUsers();
  }
}
