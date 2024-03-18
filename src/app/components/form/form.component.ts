import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Education, EducationType } from '../../../types';
import { Store } from '@ngrx/store';
import {
  addEducation,
  updateEducation,
} from '../../../store/education.actions';
import { EducationComponentStore } from '../../pages/education/education.store';
import dayjs from 'dayjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  private readonly store = inject(Store);

  educationForm!: FormGroup;
  educationTypes = EducationType;

  selectedEducation$ = this.educationComponentStore.selectedEducation$;
  isEditing = this.educationComponentStore.isEditing;
  selectedId = this.educationComponentStore.getSelectedEducationId;

  constructor(
    private fb: FormBuilder,
    private readonly educationComponentStore: EducationComponentStore
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.toggleFormSubscription();
    this.currentEducationDateSubscription();
  }

  private initForm(): void {
    this.educationForm = this.fb.group<Omit<Education, 'id'>>({
      schoolName: '',
      fieldOfStudy: '',
      description: '',
      city: '',
      from: '',
      to: '',
      current: false,
      educationType: '',
    });
  }

  private toggleFormSubscription(): void {
    this.selectedEducation$.subscribe((education) => {
      if (!education) return;

      this.educationForm.patchValue({
        ...education!,
        to: this.transformDate(education!.to),
        from: this.transformDate(education!.from),
      });
    });
  }

  private currentEducationDateSubscription(): void {
    this.educationForm.get('current')?.valueChanges.subscribe((current) => {
      if (current) {
        this.educationForm.get('to')?.disable();
      } else {
        this.educationForm.get('to')?.enable();
      }
    });
  }

  private transformDate(dateString: string): string {
    return dayjs(dateString).format('YYYY-MM-DD');
  }

  onSubmit(): void {
    if (this.isEditing()) {
      this.store.dispatch(
        updateEducation({
          ...this.educationForm.value,
          id: this.selectedId(),
          to: !this.educationForm.value.current
            ? new Date(this.educationForm.value.to).toISOString()
            : null,
          from: new Date(this.educationForm.value.from).toISOString(),
        })
      );

      this.educationComponentStore.unselectEducation();
      this.educationForm.reset();
      this.educationComponentStore.toggleDrawer();
      return;
    }

    this.store.dispatch(
      addEducation({
        ...this.educationForm.value,
        id: Math.floor(Math.random() * 90000) + 10000,
        to: !this.educationForm.value.current
          ? new Date(this.educationForm.value.to).toISOString()
          : null,
        from: new Date(this.educationForm.value.from).toISOString(),
      })
    );

    this.educationForm.reset();
    this.educationComponentStore.toggleDrawer();
  }

  onClose(): void {
    this.educationComponentStore.unselectEducation();
    this.educationForm.reset();
    this.educationComponentStore.toggleDrawer();
  }
}
