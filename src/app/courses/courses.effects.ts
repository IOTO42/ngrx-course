import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CourseActions } from "./action-types";
import { CoursesHttpService } from './services/courses-http.service';
import { concatMap, map } from 'rxjs/operators';
import { allCoursesLoaded } from "./course.actions";

@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(
    () => this.action$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap(action => this.courseHttpService.findAllCourses()),
      map(courses => allCoursesLoaded({courses}))
    )
  )

  saveCourse$ = createEffect(
    () => this.action$.pipe(
      ofType(CourseActions.courseUpdated),
      concatMap(action => this.courseHttpService.saveCourse(
        action.update.id,
        action.update.changes
      )),
    ), {dispatch: false}
  )

  // saveCourses$ = createEffect(
  //   () => this.action$.pipe(
  //     ofType(CourseActions.allCoursesLoaded),
  //     tap(courses => this.store.dispatch({courses}))
  //   )
  // )

  constructor(
    private action$: Actions,
    private courseHttpService: CoursesHttpService,
    ) {}
}
