import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

// this is an action creator function that we need to call in order to create a new login action

export const login = createAction(
  "[Login Page] User Login", // 1. source, 2. event what we report to the store
  props<{user: User}>()
)

// const newLoginAction = login({user: });


export const logout = createAction(
  "[Top Menu] Logout", // dont need a payload (props)
)
