import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  deleteEducation,
  loadEducations,
} from '../../../store/education.actions';
import { selectEducations } from '../../../store/education.selectors';
import { Education } from '../../../types';
import { EducationComponentStore } from '../../pages/education/education.store';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private readonly store = inject(Store);
  readonly educations = this.store.selectSignal(selectEducations);
  selectedEducation$ = this.educationComponentStore.selectedEducation$;

  constructor(
    private readonly educationComponentStore: EducationComponentStore,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadEducations());
  }

  selectEducation(education: Education): void {
    this.educationComponentStore.selectEducation(education);
  }

  deleteEducation(education: Education): void {
    this.store.dispatch(deleteEducation(education));
  }
}
