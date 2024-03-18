import { Component } from '@angular/core';
import { EducationComponentStore } from './education.store';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  providers: [EducationComponentStore],
})
export class EducationComponent {
  isOpened = this.educationComponentStore.isOpened;

  constructor(
    private readonly educationComponentStore: EducationComponentStore
  ) {}

  toggleAddEducation() {
    this.educationComponentStore.toggleDrawer();
  }
}
