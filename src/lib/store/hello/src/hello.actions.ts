import { User } from '@angular-starter/types/user';
import { createAction, props } from '@ngrx/store';

export const setUsers = createAction(
  '[Hello] Set Users',
  props<{ users: User[] }>()
);

export const startGetUsers = createAction('[Hello] Start Get Users');
