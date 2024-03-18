import { Injectable } from '@angular/core';
import { Education } from '../../../types';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface ComponentState {
  selectedEducation?: Education;
  isEditing: boolean;
  isOpened: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EducationComponentStore extends ComponentStore<ComponentState> {
  constructor() {
    super({ selectedEducation: undefined, isEditing: false, isOpened: false });
  }

  readonly selectedEducation$: Observable<Education | undefined> = this.select(
    (state) => state.selectedEducation
  );

  readonly isEditing = this.selectSignal((state) => state.isEditing);

  readonly isOpened = this.selectSignal((state) => state.isOpened);

  readonly getSelectedEducationId = this.selectSignal(
    (state) => state.selectedEducation?.id
  );

  readonly toggleDrawer = this.updater((state) => ({
    ...state,
    isOpened: !state.isOpened,
  }));

  readonly selectEducation = this.updater((state, education: Education) => ({
    ...state,
    isEditing: true,
    isOpened: true,
    selectedEducation: education,
  }));

  readonly unselectEducation = this.updater((state) => ({
    ...state,
    isEditing: false,
    selectedEducation: undefined,
  }));
}
