import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { compareCourses, Course } from "../model/course";
import { courseUpdated } from '../course.actions';

// export interface CoursesState { // entity format
//   entities: {[key: number]: Course},
//   ids: number[]
// }

export interface CoursesState extends EntityState<Course> { // ngRx entity format
  allCoursesLoaded: boolean
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
}); // give us the CRUD functions to the entity

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(
  initialCoursesState,

  on(CourseActions.allCoursesLoaded, (state, action) => adapter.setAll(action.courses, {...state, allCoursesLoaded: true})),

  on(CourseActions.courseUpdated, (state, action) => adapter.updateOne(action.update, state)),
);

export const { selectAll } = adapter.getSelectors();
