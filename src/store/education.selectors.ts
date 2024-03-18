import { createSelector } from '@ngrx/store';
import { AppState } from './education.state';

export const selectEducationState = (state: AppState) => state.educations;

export const selectEducations = createSelector(
  selectEducationState,
  (educationState) => educationState.educations
);

export const selectLoading = createSelector(
  selectEducationState,
  (educationState) => educationState.loading
);

export const selectError = createSelector(
  selectEducationState,
  (educationState) => educationState.error
);
