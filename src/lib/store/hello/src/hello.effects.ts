import { TypicodeService } from '@angular-starter/services/typicode.service';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { setUsers, startGetUsers } from './hello.actions';

@Injectable()
export class HelloEffects {
  private readonly typicodeService = inject(TypicodeService);
  private readonly actions$ = inject(Actions);

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(startGetUsers),
      switchMap(() =>
        this.typicodeService.getUsers().pipe(map(users => setUsers({ users })))
      )
    );
  });
}
