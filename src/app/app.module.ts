import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import ApiClient from '../api/ApiClient';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormComponent } from './components/form/form.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { educationReducer } from '../store/education.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EducationEffects } from '../store/education.effects';
import { EducationComponent } from './pages/education/education.component';
import { TimeDiffPipe } from './pipes/time-diff.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    EducationComponent,
    TimeDiffPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    StoreModule.forRoot({ educations: educationReducer }),
    EffectsModule.forRoot([EducationEffects]),
  ],
  providers: [ApiClient, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
