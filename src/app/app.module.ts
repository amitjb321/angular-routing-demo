import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MasterComponent } from './master/master.component';
import { ProcessComponent } from './process/process.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes=[
{path:'', component:HelloComponent},
{path:'master', component:MasterComponent},
{path:'process', component:ProcessComponent}
];

@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
  RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, HelloComponent, MasterComponent, ProcessComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
