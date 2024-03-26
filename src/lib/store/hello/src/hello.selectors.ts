import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HelloState } from './hello.model';
import { helloStore } from './hello.reducer';

const selectHelloState = createFeatureSelector<HelloState>(helloStore);

export const selectUsers = createSelector(
  selectHelloState,
  state => state.users
);
