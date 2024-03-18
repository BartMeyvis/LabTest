import { Education } from '../types';

export interface EducationState {
  educations: Education[];
  loading: boolean;
  error: any;
}

export interface AppState {
  educations: EducationState;
}
