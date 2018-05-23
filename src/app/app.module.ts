import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogedHomeComponent } from './components/logedHome/loged-home/loged-home.component';
import { NotFoundComponent } from './components/notFound/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogedHomeComponent,
    NotFoundComponent
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
