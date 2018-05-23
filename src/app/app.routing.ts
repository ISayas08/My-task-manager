import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notFound/not-found/not-found.component';
import { LogedHomeComponent } from './components/logedHome/loged-home/loged-home.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { HomeGuardService } from './services/homeGuard/home-guard.service';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [HomeGuardService] },
    { path: 'tasks', component: LogedHomeComponent, canActivate: [AuthGuardService] },
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
