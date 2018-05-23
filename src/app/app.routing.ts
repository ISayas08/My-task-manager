import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { HomeGuardService } from './services/homeGuard/home-guard.service';
import { LogedHomeComponent } from './components/logedHome/loged-home.component';
import { NotFoundComponent } from './components/notFound/not-found.component';
import { TasksListComponent } from './components/logedHome/tasks-list/tasks-list.component';
import { ProjectsComponent } from './components/logedHome/projects/projects.component';
import { ProfileComponent } from './components/logedHome/profile/profile.component';
import { CalendarComponent } from './components/logedHome/calendar/calendar.component';
import { TaskEditComponent } from './components/logedHome/task-edit/task-edit.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [HomeGuardService] },
    {
        path: 'tasks',
        component: LogedHomeComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: TasksListComponent },
            { path: 'edit/:id', component: TaskEditComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'calendar', component: CalendarComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuardService, HomeGuardService]
})
export class FeatureRoutingModule { }
