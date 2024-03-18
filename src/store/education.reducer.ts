import { createReducer, on } from '@ngrx/store';
import { Education } from '../types';
import {
  addEducationSuccess,
  deleteEducation,
  deleteEducationSuccess,
  loadEducations,
  loadEducationsFailure,
  loadEducationsSuccess,
  updateEducation,
  updateEducationSuccess,
} from './education.actions';
import { EducationState } from './education.state';

export const initialState: EducationState = {
  educations: [],
  loading: false,
  error: null,
};

export const educationReducer = createReducer(
  initialState,
  on(loadEducations, (state) => ({ ...state, loading: true })),
  on(loadEducationsSuccess, (state, { educations }) => ({
    ...state,
    loading: false,
    educations,
  })),
  on(loadEducationsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(addEducationSuccess, (state, { education }) => ({
    ...state,
    educations: [...state.educations, education],
  })),
  on(updateEducationSuccess, (state, { education }) => {
    const updatedEducations = state.educations.map((item) =>
      item.id === education.id ? education : item
    );
    return { ...state, educations: updatedEducations };
  }),
  on(deleteEducationSuccess, (state, { education }) => {
    const updatedEducations = state.educations.filter(
      (item) => item.id !== education.id
    );
    return { ...state, educations: updatedEducations };
  })
);
