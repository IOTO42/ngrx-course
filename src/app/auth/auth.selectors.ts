import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const isLoggedIn = createSelector( // plain mapping function with memory
  // state => state['auth'], // selector, simple mapping function
  // OR
  selectAuthState,
  (auth) => !!auth.user  // projector function
);


// export const isLoggedOut = createSelector(
//   state => state['auth'],
//   (auth) => !auth.user
// );

// or

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
