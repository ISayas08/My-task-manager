import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { CalendarModule } from 'angular-calendar';

import { FeatureRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogedHomeComponent } from './components/logedHome/loged-home.component';
import { NotFoundComponent } from './components/notFound/not-found.component';
import { TasksListComponent } from './components/logedHome/tasks-list/tasks-list.component';
import { ProjectsComponent } from './components/logedHome/projects/projects.component';
import { ProfileComponent } from './components/logedHome/profile/profile.component';
import { CalendarComponent } from './components/logedHome/calendar/calendar.component';
import { TaskFormComponent } from './components/logedHome/modals/task-form/task-form.component';
import { MenuComponent } from './components/logedHome/menu/menu.component';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { AlertComponent } from './components/logedHome/modals/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogedHomeComponent,
    NotFoundComponent,
    MenuComponent,
    TasksListComponent,
    ProjectsComponent,
    ProfileComponent,
    CalendarComponent,
    TaskFormComponent,
    StopPropagationDirective,
    AlertComponent
  ],
  entryComponents: [
    TaskFormComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
