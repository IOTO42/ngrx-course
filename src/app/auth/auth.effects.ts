import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
export  class AuthEffects {
  // bestest way
  login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap(action => localStorage.setItem('user', JSON.stringify(action.user)) // typesafe
        )
      ), {dispatch: false}
    )

    logout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(
          action => {
            localStorage.removeItem('user') // typesafe
            this.router.navigateByUrl('/login')
          }
        )
      ), {dispatch: false}
    )

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {

    // third solution best way, no need for subscription

    // const login$ = createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(AuthActions.login),
    //     tap(action => {
    //         localStorage.setItem('user', JSON.stringify(action.user)); // typesafe
    //       }
    //     )
    //   )
    // )




    // second solution (better way)
    // const login$ = this.actions$.pipe(
    //   ofType(AuthActions.login),
    //   tap(action => {
    //       localStorage.setItem('user', JSON.stringify(action.user)); // typesafe
    //     }
    //   )
    // );

    // login$.subscribe();




    // first solution
    // actions$.subscribe(action => {

    //   if(action.type == '[Login Page] User Login') {
    //     localStorage.setItem('user', JSON.stringify(action['user'])); // not typesafe
    //   }
    // })
  }
}
