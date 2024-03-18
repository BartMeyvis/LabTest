import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { educationReducer } from '../../../store/education.reducer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CreateFormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        StoreModule.forRoot({ key: educationReducer }),
        MatFormFieldModule,
        MatSlideToggleModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should disable the "to date" field when the switcher is clicked', () => {
    // Arrange
    const currentControl = component.educationForm.get('current');
    const toControl = component.educationForm.get('to');

    // Act
    currentControl?.setValue(true);

    // Assert
    expect(toControl?.disabled).toBe(true);
  });
});
