import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EducationService } from '../services/education.service';
import {
  addEducation,
  addEducationFailure,
  addEducationSuccess,
  deleteEducation,
  deleteEducationFailure,
  deleteEducationSuccess,
  loadEducations,
  loadEducationsFailure,
  loadEducationsSuccess,
  updateEducation,
  updateEducationFailure,
  updateEducationSuccess,
} from './education.actions';
import { from } from 'rxjs';

@Injectable()
export class EducationEffects {
  constructor(
    private actions$: Actions,
    private educationService: EducationService
  ) {}

  loadEducations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEducations),
      mergeMap(() =>
        from(this.educationService.getEducations()).pipe(
          map((educations) => loadEducationsSuccess({ educations })),
          catchError((error) => of(loadEducationsFailure({ error })))
        )
      )
    )
  );

  addEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEducation),
      mergeMap((education) =>
        from(this.educationService.addEducation(education)).pipe(
          map((education) => addEducationSuccess({ education })),
          catchError((error) => of(addEducationFailure({ error })))
        )
      )
    )
  );

  updateEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEducation),
      mergeMap((education) =>
        from(this.educationService.updateEducation(education)).pipe(
          map((education) => updateEducationSuccess({ education })),
          catchError((error) => of(updateEducationFailure({ error })))
        )
      )
    )
  );

  deleteEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEducation),
      mergeMap((education) =>
        from(this.educationService.deleteEducation(education)).pipe(
          map((education) => deleteEducationSuccess({ education })),
          catchError((error) => of(deleteEducationFailure({ error })))
        )
      )
    )
  );
}
