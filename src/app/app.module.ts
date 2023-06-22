import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { IssuesComponent } from './layout/issues/issues.component';
import { CodeComponent } from './layout/code/code.component';
import { ActivityComponent } from './layout/activity/activity.component';
import { TableBasicExampleComponent } from './layout/table-basic-example/table-basic-example.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    IssuesComponent,
    CodeComponent,
    ActivityComponent,
    TableBasicExampleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
