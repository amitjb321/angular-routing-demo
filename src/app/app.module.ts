import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MasterComponent } from './master/master.component';
import { ProcessComponent } from './process/process.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes=[
{path:'', component:HomeComponent},
{path:'master', component:MasterComponent},
{path:'process', component:ProcessComponent}
];

@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
  NgbModule,
  RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, HelloComponent, MasterComponent, ProcessComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
