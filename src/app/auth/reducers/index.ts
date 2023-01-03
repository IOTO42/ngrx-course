import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User,
}

export const initialAuthState: AuthState = {
  user: undefined
};


// function authReducer(state, action): AuthState { //  as argument that is a current state and give us back the new state
//   return
// }

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    }
  })
);
