import { GetUserResponseDto } from '@angular-starter/types/user.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TypicodeService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://jsonplaceholder.typicode.com/';

  getUsers(): Observable<GetUserResponseDto> {
    return this.http.get<GetUserResponseDto>(`${this.url}users`);
  }
}
