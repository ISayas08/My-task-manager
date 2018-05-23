import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogedHomeComponent } from './components/logedHome/loged-home.component';
import { NotFoundComponent } from './components/notFound/not-found.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { TasksListComponent } from './components/logedHome/tasks-list/tasks-list.component';
import { ProjectsComponent } from './components/logedHome/projects/projects.component';
import { ProfileComponent } from './components/logedHome/profile/profile.component';
import { CalendarComponent } from './components/logedHome/calendar/calendar.component';
import { TaskEditComponent } from './components/logedHome/task-edit/task-edit.component';

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
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
