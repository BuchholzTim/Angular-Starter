import { createReducer, on } from '@ngrx/store';
import { setUsers } from './hello.actions';
import { HelloState } from './hello.model';

export const helloStore = 'helloStore';

export const initialState: HelloState = {
  users: [],
};

export const helloReducer = createReducer<HelloState>(
  initialState,
  on(
    setUsers,
    (state, payload): HelloState => ({
      ...state,
      users: payload.users,
    })
  )
);
