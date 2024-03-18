import { createAction, props } from '@ngrx/store';
import { Education } from '../types';

export const loadEducations = createAction('[Education] Load Educations');

export const loadEducationsSuccess = createAction(
  '[Education] Load Educations Success',
  props<{ educations: Education[] }>()
);

export const loadEducationsFailure = createAction(
  '[Education] Load Educations Failure',
  props<{ error: any }>()
);

export const addEducation = createAction(
  '[Education] Add Education',
  props<Education>()
);

export const addEducationSuccess = createAction(
  '[Education] Add Education Success',
  props<{ education: Education }>()
);

export const addEducationFailure = createAction(
  '[Education] Add Education Failed',
  props<{ error: any }>()
);

export const updateEducation = createAction(
  '[Education] Update Education',
  props<Education>()
);

export const updateEducationSuccess = createAction(
  '[Education] Update Education Success',
  props<{ education: Education }>()
);

export const updateEducationFailure = createAction(
  '[Education] Update Education Failed',
  props<{ error: any }>()
);

export const deleteEducation = createAction(
  '[Education] Delete Education',
  props<Education>()
);

export const deleteEducationSuccess = createAction(
  '[Education] Delete Education Success',
  props<{ education: Education }>()
);

export const deleteEducationFailure = createAction(
  '[Education] Delete Education Failure',
  props<{ error: any }>()
);
